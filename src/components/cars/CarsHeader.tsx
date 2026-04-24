import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Badge } from '../ui/Badge';

export const CarsHeader: React.FC = () => {
  const { filteredItems, filters } = useSelector((state: RootState) => state.vehicles);

  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
      <div>
        <h1 className="text-4xl font-display font-black mb-2">استكشف <span className="text-primary italic">أسطولنا</span></h1>
        <p className="text-white/50 text-sm font-medium">عرض {filteredItems.length} سيارة متاحة لك</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.searchQuery && <Badge variant="primary">نتائج: {filters.searchQuery}</Badge>}
        {filters.location && <Badge variant="primary">{filters.location}</Badge>}
        {filters.brand && <Badge variant="primary">{filters.brand}</Badge>}
        {filters.transmission && <Badge variant="primary">{filters.transmission}</Badge>}
        {filters.fuelType && <Badge variant="primary">{filters.fuelType}</Badge>}
        {filters.year && <Badge variant="primary">موديل {filters.year}</Badge>}
        <Badge variant="outline">حتى {filters.maxPrice.toLocaleString()} ج.م</Badge>
      </div>
    </div>
  );
};