import React from 'react';
import { Fuel, Settings, Users, Calendar } from 'lucide-react';

interface CarSpecsProps {
  transmission: string;
  fuelType: string;
  seats: number;
  year: number;
}

export const CarSpecs: React.FC<CarSpecsProps> = ({ transmission, fuelType, seats, year }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="card-gradient border border-white/10 rounded-3xl p-6 space-y-2">
        <div className="flex items-center gap-2 text-white/40">
          <Settings size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">ناقل الحركة</span>
        </div>
        <div className="text-lg font-black">{transmission}</div>
      </div>
      <div className="card-gradient border border-white/10 rounded-3xl p-6 space-y-2">
        <div className="flex items-center gap-2 text-white/40">
          <Fuel size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">الوقود</span>
        </div>
        <div className="text-lg font-black">{fuelType}</div>
      </div>
      <div className="card-gradient border border-white/10 rounded-3xl p-6 space-y-2">
        <div className="flex items-center gap-2 text-white/40">
          <Users size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">المقاعد</span>
        </div>
        <div className="text-lg font-black">{seats} ركاب</div>
      </div>
      <div className="card-gradient border border-white/10 rounded-3xl p-6 space-y-2">
        <div className="flex items-center gap-2 text-white/40">
          <Calendar size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">الموديل</span>
        </div>
        <div className="text-lg font-black">{year}</div>
      </div>
    </div>
  );
};