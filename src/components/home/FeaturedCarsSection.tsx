import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CarCard } from '../car/CarCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const FeaturedCarsSection: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.vehicles);
  const featuredCars = items.slice(0, 3);

  return (
    <section className="px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black mb-2">السيارات <span className="text-primary italic">المميزة</span></h2>
            <p className="text-white/40 text-sm font-medium">اخترنا لك الأفضل لهذا الأسبوع</p>
          </div>
          <Link to="/cars" className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
            <span>عرض الكل</span>
            <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} vehicle={car} />
          ))}
        </div>
      </div>
    </section>
  );
};