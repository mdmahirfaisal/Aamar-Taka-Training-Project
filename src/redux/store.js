import { configureStore } from '@reduxjs/toolkit';
import LoanReducer from './Slices/LoanSlice';

const store = configureStore({
    reducer: {
        loan: LoanReducer,
    },
})

export default store;