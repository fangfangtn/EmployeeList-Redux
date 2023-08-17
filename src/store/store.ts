import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../components/EmplopyeeSlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
