
import React from 'react';
import { Vehicle } from '../../data/vehicles';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Fuel, Settings, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  vehicle: Vehicle;
}

export const CarCard: React.FC<CarCardProps> = ({ vehicle }) => {
  return (
    <div className="card-gradient border border-white/5 rounded-3xl p-5 group flex flex-col h-full hover:border-primary/20 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{vehicle.brand} {vehicle.model}</h3>
          <Badge className="mt-1">{vehicle.year}</Badge>
        </div>
        <div className="text-left">
          <div className="text-primary text-xl font-black">{vehicle.pricePerDay.toLocaleString()} ج.م</div>
          <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">لليوم الواحد</div>
        </div>
      </div>

      <div className="h-44 bg-white/5 rounded-2xl relative mb-6 overflow-hidden flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
        <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-6xl uppercase tracking-tighter select-none">
          {vehicle.model}
        </div>
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="relative z-10 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-4 right-4 w-40 h-20 bg-gradient-to-l from-primary/20 to-transparent blur-xl"></div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-white/40 mb-1">
            <Settings size={12} />
            <span className="text-[10px] uppercase font-bold">المحرك</span>
          </div>
          <div className="text-[11px] font-bold">{vehicle.transmission}</div>
        </div>
        <div className="text-center border-x border-white/10">
          <div className="flex items-center justify-center gap-1 text-white/40 mb-1">
            <Users size={12} />
            <span className="text-[10px] uppercase font-bold">المقاعد</span>
          </div>
          <div className="text-[11px] font-bold">{vehicle.seats} ركاب</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-white/40 mb-1">
            <Fuel size={12} />
            <span className="text-[10px] uppercase font-bold">الوقود</span>
          </div>
          <div className="text-[11px] font-bold">{vehicle.fuelType}</div>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-4">
        <Link to={`/car/${vehicle.id}`} className="flex-1">
          <Button variant="secondary" className="w-full py-3 rounded-2xl border border-white/10 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
            احجز الآن
          </Button>
        </Link>
        <div className="flex items-center gap-1 text-primary">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-black">{vehicle.rating}</span>
        </div>
      </div>
    </div>
  );
};
