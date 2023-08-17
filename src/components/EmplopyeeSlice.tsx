
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEmployee } from './EmployeeList';

interface EmployeeState {
  employees: IEmployee[];
  currentPage: number;
}

const initialState: EmployeeState = {
  employees: [],
  currentPage: 1,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<IEmployee[]>) => {
      state.employees = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    sortEmployees: (state, action: PayloadAction<{ sortType: string; sortOrder: string }>) => {
      const { sortType, sortOrder } = action.payload;

      const sortedEmployees = [...state.employees];

      sortedEmployees.sort((a: any, b: any) => {
        if (sortOrder === 'asc') {
          return a[sortType].localeCompare(b[sortType]);
        } else {
          return b[sortType].localeCompare(a[sortType]);
        }
      });

      state.employees = sortedEmployees;
    },
  },
});

export const { setEmployees, sortEmployees, setCurrentPage } = employeeSlice.actions;
export default employeeSlice.reducer;
