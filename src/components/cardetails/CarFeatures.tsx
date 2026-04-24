import React from 'react';
import { Check } from 'lucide-react';

interface CarFeaturesProps {
  features: string[];
}

export const CarFeatures: React.FC<CarFeaturesProps> = ({ features }) => {
  return (
    <div className="space-y-6">
       <h2 className="text-2xl font-black">المميزات الإضافية</h2>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
               <div className="text-primary"><Check size={18} /></div>
               <span className="text-sm font-bold text-white/80">{feature}</span>
            </div>
          ))}
       </div>
    </div>
  );
};