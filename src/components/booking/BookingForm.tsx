import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Calendar as CalendarIcon, MapPin, ChevronRight } from 'lucide-react';
import { LocationMap } from '../common/LocationMap';

interface BookingFormProps {
  vehicle: {
    location: string;
  };
  formik: any;
}

export const BookingForm: React.FC<BookingFormProps> = ({ vehicle, formik }) => {
  const today = new Date().toISOString().split('T')[0];
  const endDateMin = formik.values.startDate || today;

  return (
    <div className="card-gradient border border-white/10 rounded-[40px] p-8 md:p-12 space-y-10">
       <form onSubmit={formik.handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
             <div className="relative flex ">
                <CalendarIcon className="absolute left-4 top-9 text-white/20" size={18} />
                <Input
                  label="تاريخ الاستلام"
                  type="date"
                  min={today}
                  {...formik.getFieldProps('startDate')}
                  error={formik.touched.startDate && formik.errors.startDate ? (formik.errors.startDate as string) : undefined}
                  className="pl-12"
                />
             </div>
             <div className="relative">
                <CalendarIcon className="absolute left-4 top-9 text-white/20" size={18} />
                <Input
                  label="تاريخ العودة"
                  type="date"
                  min={endDateMin}
                  {...formik.getFieldProps('endDate')}
                  error={formik.touched.endDate && formik.errors.endDate ? (formik.errors.endDate as string) : undefined}
                  className="pl-12"
                />
             </div>
          </div>

          <div className="relative">
             <MapPin className="absolute left-4 top-9 text-white/20" size={18} />
             <Input
               label="موقع الاستلام"
               value={vehicle.location}
               disabled
               className="pl-12 opacity-60"
             />
          </div>

          <div className="space-y-3">
             <div className="flex items-center justify-between px-1">
                <span className="text-[10px] uppercase text-white/40 font-bold tracking-wider">خريطة الموقع</span>
                <span className="text-[10px] text-primary underline">معاينة</span>
             </div>
             <LocationMap location={vehicle.location} className="h-45" />
          </div>

          <div className="space-y-2">
             <label className="block text-[10px] uppercase text-white/40 font-bold tracking-wider px-1">ملاحظات إضافية</label>
             <textarea
               className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-primary/50 transition-colors min-h-30"
               placeholder="أي طلبات خاصة..."
               {...formik.getFieldProps('notes')}
             />
          </div>

          <Button type="submit" className="w-full h-14 text-lg rounded-2xl shadow-xl shadow-primary/10">
             <span>متابعة للدفع</span>
             <ChevronRight size={18} className="mr-2" />
          </Button>
       </form>
    </div>
  );
};
