import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CarCard } from '../car/CarCard';

export const CarsGrid: React.FC = () => {
  const { filteredItems } = useSelector((state: RootState) => state.vehicles);

  if (filteredItems.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-fade-in">
        {filteredItems.map((car) => (
          <CarCard key={car.id} vehicle={car} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-40 bg-white/[0.02] rounded-[40px] border border-white/5 animate-fade-in">
      <div className="text-6xl mb-6 opacity-20">🚗</div>
      <h3 className="text-2xl font-bold text-white/60">عذراً، لم نجد نتائج تطابق بحثك</h3>
      <p className="text-white/30 text-sm font-medium mt-2">حاول تغيير خيارات التصفية أو البحث عن ماركة أخرى</p>
    </div>
  );
};