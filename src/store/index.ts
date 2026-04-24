
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import vehicleReducer from './features/vehicleSlice';
import bookingReducer from './features/bookingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    vehicles: vehicleReducer,
    bookings: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
