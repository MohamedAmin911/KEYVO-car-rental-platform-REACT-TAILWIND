
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronLeft, Calendar, MapPin, Car } from 'lucide-react';

export const Confirmation: React.FC = () => {
  const location = useLocation();
  const { booking } = location.state || {};

  if (!booking) return null;

  return (
    <div className="px-6 md:px-12 py-20 flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-16 text-center space-y-10"
      >
        <div className="flex flex-col items-center gap-6">
           <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary scale-110">
              <CheckCircle2 size={60} strokeWidth={2.5} />
           </div>
           <div className="space-y-2">
              <h1 className="text-4xl font-black italic">تم بنجاح!</h1>
              <p className="text-white/40 font-bold uppercase tracking-widest text-xs">تم تأكيد حجزك وتلقينا دفعتك</p>
           </div>
        </div>

        <div className="space-y-4 pt-10 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-3xl text-right space-y-2">
                 <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold uppercase">
                    <Calendar size={12} />
                    <span>تاريخ الاستلام</span>
                 </div>
                 <div className="font-black text-lg">{new Date(booking.startDate).toLocaleDateString('ar-EG')}</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl text-right space-y-2">
                 <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold uppercase">
                    <Calendar size={12} />
                    <span>تاريخ العودة</span>
                 </div>
                 <div className="font-black text-lg">{new Date(booking.endDate).toLocaleDateString('ar-EG')}</div>
              </div>
           </div>
           <div className="bg-white/5 p-6 rounded-3xl text-right flex justify-between items-center">
              <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold uppercase">
                    <Car size={12} />
                    <span>معرف الحجز</span>
                 </div>
                 <div className="font-black text-primary uppercase">{booking.id}</div>
              </div>
              <div className="text-left">
                  <div className="text-[10px] text-white/20 font-bold uppercase mb-1">المبلغ المدفوع</div>
                  <div className="text-2xl font-black">{booking.totalPrice.toLocaleString()} ج.م</div>
              </div>
           </div>
        </div>

        <p className="text-white/40 text-sm italic font-medium">
          لقد أرسلنا تفاصيل الحجز إلى بريدك الإلكتروني. فريقنا سيتواصل معك قريباً لتنظيم عملية الاستلام.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
           <Link to="/profile" className="flex-1">
              <Button variant="secondary" className="w-full h-14 rounded-2xl font-black">إدارة حجوزاتي</Button>
           </Link>
           <Link to="/" className="flex-1">
              <Button className="w-full h-14 rounded-2xl font-black">العودة للرئيسية</Button>
           </Link>
        </div>
      </motion.div>
    </div>
  );
};
