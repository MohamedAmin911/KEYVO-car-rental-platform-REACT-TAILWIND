
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BookingForm } from '../components/booking/BookingForm';
import { BookingSummary } from '../components/booking/BookingSummary';

export const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { items } = useSelector((state: RootState) => state.vehicles);
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const vehicle = items.find(v => v.id === id);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const formik = useFormik({
    initialValues: {
      startDate: '',
      endDate: '',
      notes: '',
    },
    validationSchema: Yup.object({
      startDate: Yup.date().min(new Date(), 'التاريخ يجب أن يكون في المستقبل').required('مطلوب'),
      endDate: Yup.date().min(Yup.ref('startDate'), 'تاريخ العودة يجب أن يكون بعد تاريخ الاستلام').required('مطلوب'),
    }),
    onSubmit: (values) => {
      // Pass booking info to payment page via state
      navigate(`/payment/${id}`, {
        state: {
          bookingInfo: values,
          totalPrice: vehicle ? calculateTotalPrice(values.startDate, values.endDate, vehicle.pricePerDay) : 0
        }
      });
    },
  });

  const calculateTotalPrice = (start: string, end: string, price: number) => {
    if (!start || !end) return 0;
    const diffTime = Math.abs(new Date(end).getTime() - new Date(start).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    return diffDays * price;
  };

  if (!vehicle) return null;

  return (
    <div className="px-6 md:px-12 py-12">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="space-y-4">
           <h1 className="text-4xl font-black">حجز <span className="text-primary italic">المركبة</span></h1>
           <p className="text-white/40 font-medium">أكمل تفاصيل رحلتك لتأكيد الحجز</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
           {/* Booking Form */}
           <BookingForm vehicle={vehicle} formik={formik} />

           {/* Booking Summary */}
           <BookingSummary vehicle={vehicle} formik={formik} calculateTotalPrice={calculateTotalPrice} />
        </div>
      </div>
    </div>
  );
};
