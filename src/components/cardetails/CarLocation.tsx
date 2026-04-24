import React from 'react';
import { LocationMap } from '../common/LocationMap';

interface CarLocationProps {
  location: string;
}

export const CarLocation: React.FC<CarLocationProps> = ({ location }) => {
  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
         <h2 className="text-2xl font-black">موقع الاستلام</h2>
         <div className="text-xs font-bold text-white/40 border border-white/10 px-3 py-1 rounded-full">{location}</div>
       </div>
       <LocationMap location={location} className="h-[350px]" />
    </div>
  );
};