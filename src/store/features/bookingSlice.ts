
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Booking {
  id: string;
  vehicleId: string;
  userId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'نشط' | 'مكتمل' | 'ملغي';
  createdAt: string;
}

interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.unshift(action.payload);
    },
    cancelBooking: (state, action: PayloadAction<string>) => {
      const booking = state.bookings.find(b => b.id === action.payload);
      if (booking) {
        booking.status = 'ملغي';
      }
    }
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
