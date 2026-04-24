import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Star, MapPin } from 'lucide-react';

interface CarBookingCardProps {
  vehicle: {
    id: string;
    brand: string;
    model: string;
    rating: number;
    location: string;
    pricePerDay: number;
  };
}

export const CarBookingCard: React.FC<CarBookingCardProps> = ({ vehicle }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Badge variant="primary" className="px-4 py-2 text-xs ">متاح الآن</Badge>
        <h1 className="text-4xl md:text-5xl font-black mt-4">{vehicle.brand} {vehicle.model}</h1>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-1 text-primary">
             <Star size={18} fill="currentColor" />
             <span className="text-lg font-black">{vehicle.rating}</span>
             <span className="text-xs text-white/40 font-bold mr-1">(120 تقييم)</span>
           </div>
           <div className="flex items-center gap-2 text-white/40 font-bold text-sm">
             <MapPin size={16} />
             <span>{vehicle.location}</span>
           </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-[40px] p-8 space-y-8 border border-primary/10">
         <div className="flex justify-between items-end">
           <div>
             <div className="text-xs font-bold text-white/40 uppercase mb-1">السعر الإجمالي</div>
             <div className="text-4xl font-black text-primary">{vehicle.pricePerDay.toLocaleString()} ج.م</div>
           </div>
           <div className="text-sm font-bold text-white/40 italic">لكل يوم</div>
         </div>

         <Link to={`/booking/${vehicle.id}`} className="block">
            <Button size="lg" className="w-full h-16 text-lg rounded-2xl shadow-xl shadow-primary/20">احجز الآن</Button>
         </Link>
      </div>
    </div>
  );
};