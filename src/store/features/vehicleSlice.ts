
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle, vehicles } from '../../data/vehicles';

interface VehicleState {
  items: Vehicle[];
  filteredItems: Vehicle[];
  selectedVehicle: Vehicle | null;
  filters: {
    location: string;
    brand: string;
    transmission: string;
    maxPrice: number;
    fuelType: string;
    year: string;
    searchQuery: string;
  };
}

const initialState: VehicleState = {
  items: vehicles,
  filteredItems: vehicles,
  selectedVehicle: null,
  filters: {
    location: '',
    brand: '',
    transmission: '',
    maxPrice: 3000,
    fuelType: '',
    year: '',
    searchQuery: '',
  },
};

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<VehicleState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredItems = state.items.filter(item => {
        const matchLocation = !state.filters.location || item.location === state.filters.location;
        const matchBrand = !state.filters.brand || item.brand === state.filters.brand;
        const matchTransmission = !state.filters.transmission || item.transmission === state.filters.transmission;
        const matchPrice = item.pricePerDay <= state.filters.maxPrice;
        const matchFuel = !state.filters.fuelType || item.fuelType === state.filters.fuelType;
        const matchYear = !state.filters.year || item.year.toString() === state.filters.year;
        
        const q = state.filters.searchQuery.toLowerCase().trim();
        const matchSearch = !q || 
          item.brand.toLowerCase().includes(q) || 
          item.model.toLowerCase().includes(q) ||
          `${item.brand} ${item.model}`.toLowerCase().includes(q);
        
        return matchLocation && matchBrand && matchTransmission && matchPrice && matchFuel && matchYear && matchSearch;
      });
    },
    selectVehicle: (state, action: PayloadAction<string>) => {
      state.selectedVehicle = state.items.find(v => v.id === action.payload) || null;
    },
    resetFilters: (state) => {
      state.filters = { 
        location: '', 
        brand: '', 
        transmission: '', 
        maxPrice: 3000, 
        fuelType: '', 
        year: '',
        searchQuery: ''
      };
      state.filteredItems = state.items;
    }
  },
});

export const { setFilter, selectVehicle, resetFilters } = vehicleSlice.actions;
export default vehicleSlice.reducer;
