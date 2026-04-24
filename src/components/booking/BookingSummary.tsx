import React from 'react';
import { CreditCard } from 'lucide-react';

interface BookingSummaryProps {
  vehicle: {
    images: string[];
    brand: string;
    model: string;
    year: number;
    transmission: string;
    pricePerDay: number;
  };
  formik: any;
  calculateTotalPrice: (start: string, end: string, price: number) => number;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({ vehicle, formik, calculateTotalPrice }) => {
  return (
    <div className="space-y-8">
       <div className="card-gradient border border-white/10 rounded-[40px] p-8 space-y-6">
          <h2 className="text-xl font-bold border-b border-white/5 pb-4">ملخص الحجز</h2>
          <div className="flex gap-4 items-center">
             <div className="w-24 h-24 bg-white/5 rounded-2xl overflow-hidden p-2">
                <img src={vehicle.images[0]} alt={vehicle.model} className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
             </div>
             <div>
                <h3 className="font-bold text-lg">{vehicle.brand} {vehicle.model}</h3>
                <p className="text-white/40 text-xs font-bold leading-relaxed">{vehicle.year} • {vehicle.transmission}</p>
             </div>
          </div>

          <div className="space-y-4 pt-4">
             <div className="flex justify-between text-sm">
                <span className="text-white/40 font-bold">سعر التأجير اليومي</span>
                <span className="font-bold">{vehicle.pricePerDay.toLocaleString()} ج.م</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-white/40 font-bold">عدد الأيام</span>
                <span className="font-bold">
                  {formik.values.startDate && formik.values.endDate
                     ? calculateTotalPrice(formik.values.startDate, formik.values.endDate, 1)
                     : 1} يوم
                </span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-white/40 font-bold">رسوم الخدمة والضرائب</span>
                <span className="font-bold text-green-500">مجاناً (عرض خاص)</span>
             </div>
             <div className="pt-4 mt-4 border-t border-white/5 flex justify-between items-end">
                <span className="text-lg font-black italic">الإجمالي</span>
                <span className="text-3xl font-black text-primary">
                  {calculateTotalPrice(formik.values.startDate, formik.values.endDate, vehicle.pricePerDay).toLocaleString()} ج.م
                </span>
             </div>
          </div>
       </div>

       <div className="bg-primary/5 rounded-[30px] p-6 border border-primary/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
             <CreditCard size={24} />
          </div>
          <div>
             <h4 className="text-sm font-bold">دفع آمن بنسبة 100%</h4>
             <p className="text-[10px] text-white/40 font-bold">جميع المعاملات المالية مشفرة وآمنة تماماً</p>
          </div>
       </div>
    </div>
  );
};