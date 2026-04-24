
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { CarImageGallery } from '../components/cardetails/CarImageGallery';
import { CarFeatures } from '../components/cardetails/CarFeatures';
import { CarLocation } from '../components/cardetails/CarLocation';
import { CarSpecs } from '../components/cardetails/CarSpecs';
import { CarBookingCard } from '../components/cardetails/CarBookingCard';

export const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { items } = useSelector((state: RootState) => state.vehicles);
  const vehicle = items.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <h2 className="text-2xl font-bold">عذراً، السيارة غير موجودة</h2>
        <Button onClick={() => navigate('/cars')} className="mt-6">العودة للبحث</Button>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-12 pb-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Breadcrumb */}
        <Link to="/cars" className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-primary transition-colors w-fit">
           <ArrowRight size={16} />
           <span>العودة للنتائج</span>
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Visuals */}
          <div className="flex-[1.5] space-y-8">
            {/* Car Image Gallery */}
            <CarImageGallery vehicle={vehicle} />

            {/* Car Features */}
            <CarFeatures features={vehicle.features} />

            {/* Car Location */}
            <CarLocation location={vehicle.location} />
          </div>

          {/* Pricing & Booking Sidebar */}
          <div className="flex-1 space-y-8">
            {/* Car Specs */}
            <CarSpecs
              transmission={vehicle.transmission}
              fuelType={vehicle.fuelType}
              seats={vehicle.seats}
              year={vehicle.year}
            />

            {/* Car Booking Card */}
            <CarBookingCard vehicle={vehicle} />
          </div>
        </div>
      </div>
    </div>
  );
};
