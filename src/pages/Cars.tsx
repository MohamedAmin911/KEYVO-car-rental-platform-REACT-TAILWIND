
import React from 'react';
import { FilterBar } from '../components/car/FilterBar';
import { CarsHeader } from '../components/cars/CarsHeader';
import { CarsGrid } from '../components/cars/CarsGrid';

export const Cars: React.FC = () => {
  return (
    <div className="px-6 md:px-12 py-12 flex flex-col gap-12 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        {/* Cars Header */}
        <CarsHeader />

        {/* Filter Bar */}
        <div className="mb-12">
          <FilterBar />
        </div>

        {/* Cars Grid */}
        <CarsGrid />
      </div>
    </div>
  );
};
