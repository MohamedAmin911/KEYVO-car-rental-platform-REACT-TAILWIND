
import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addBooking } from '../store/features/bookingSlice';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { motion } from 'motion/react';
import { CreditCard, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LocationMap } from '../components/common/LocationMap';

export const Payment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.vehicles);
  const { user } = useSelector((state: RootState) => state.auth);
  const vehicle = items.find(v => v.id === id);
  const { bookingInfo, totalPrice } = location.state || {};
  const [isProcessing, setIsProcessing] = React.useState(false);

  React.useEffect(() => {
    if (!bookingInfo || !vehicle) {
      navigate('/cars');
    }
  }, [bookingInfo, vehicle, navigate]);

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expiry: '',
      cvv: '',
      cardHolder: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string().matches(/^[0-9]{16}$/, 'يجب أن يتكون من 16 رقماً').required('مطلوب'),
      expiry: Yup.string().matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'صيغة غير صحيحة (MM/YY)').required('مطلوب'),
      cvv: Yup.string().matches(/^[0-9]{3}$/, '3 أرقام').required('مطلوب'),
      cardHolder: Yup.string().required('مطلوب الاسم كما هو على البطاقة'),
    }),
    onSubmit: (values) => {
      setIsProcessing(true);
      // Simulate Payment Processing
      setTimeout(() => {
        const booking = {
          id: Math.random().toString(36).substr(2, 9),
          vehicleId: vehicle?.id || '',
          userId: user?.id || '',
          startDate: bookingInfo.startDate,
          endDate: bookingInfo.endDate,
          totalPrice: totalPrice,
          status: 'نشط' as const,
          createdAt: new Date().toISOString(),
        };
        dispatch(addBooking(booking));
        setIsProcessing(false);
        navigate('/confirmation', { state: { booking } });
      }, 2500);
    },
  });

  if (!vehicle) return null;

  return (
    <div className="px-6 md:px-12 py-12">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
              <CreditCard size={32} />
           </div>
           <h1 className="text-4xl font-black">الدفع الآمن</h1>
           <p className="text-white/40 font-medium italic">لقد كدت تنتهي! أكمل بيانات الدفع لتأكيد رحلتك</p>
        </div>

        <div className="space-y-4">
           <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-black uppercase tracking-widest text-white/60">موقع استلام السيارة</h3>
              <Badge variant="outline" className="text-[10px]">{vehicle.location}</Badge>
           </div>
           <LocationMap location={vehicle.location} className="h-[200px]" />
        </div>

        <div className="card-gradient border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-6">
              <Lock size={20} className="text-white/10" />
           </div>

           <form onSubmit={formik.handleSubmit} className="space-y-8">
              <Input 
                label="الاسم على البطاقة" 
                placeholder="أحمد محمد مصطفى"
                {...formik.getFieldProps('cardHolder')}
                error={formik.touched.cardHolder && formik.errors.cardHolder ? formik.errors.cardHolder : undefined}
              />

              <div className="relative">
                 <div className="absolute left-4 top-11 flex gap-1 items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg/250px-Visa_Inc._logo_%282021%E2%80%93present%29.svg.png" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
                    <img src="https://www.mastercard.com/content/dam/brandcenter/assets/images/logos/mclogo-for-footer.svg" alt="MC" className="h-4" referrerPolicy="no-referrer" />
                 </div>
                 <Input 
                   label="رقم البطاقة" 
                   placeholder="0000 0000 0000 0000"
                   {...formik.getFieldProps('cardNumber')}
                   error={formik.touched.cardNumber && formik.errors.cardNumber ? formik.errors.cardNumber : undefined}
                 />
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <Input 
                   label="تاريخ الانتهاء" 
                   placeholder="MM/YY"
                   {...formik.getFieldProps('expiry')}
                   error={formik.touched.expiry && formik.errors.expiry ? formik.errors.expiry : undefined}
                 />
                 <Input 
                   label="CVV" 
                   placeholder="123"
                   type="password"
                   {...formik.getFieldProps('cvv')}
                   error={formik.touched.cvv && formik.errors.cvv ? formik.errors.cvv : undefined}
                 />
              </div>

              <div className="bg-white/5 p-6 rounded-2xl flex justify-between items-center">
                 <div>
                    <span className="text-xs font-bold text-white/40 block mb-1">المبلغ المطلوب دفعه</span>
                    <span className="text-2xl font-black text-primary">{totalPrice?.toLocaleString()} ج.م</span>
                 </div>
                 <Badge variant="outline">معاملة مشفرة</Badge>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-16 text-xl rounded-2xl shadow-2xl shadow-primary/20"
                loading={isProcessing}
              >
                 تأكيد الحجز والدفع
              </Button>
           </form>
        </div>

        <div className="flex justify-center gap-8 opacity-20 filter grayscale">
           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" referrerPolicy="no-referrer" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" referrerPolicy="no-referrer" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  );
};
