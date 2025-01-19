import { configureStore } from '@reduxjs/toolkit';
import supportRequestReducer from './slices/supportRequestSlice';

export const store = configureStore({
  reducer: {
    supportRequest: supportRequestReducer,
  },
});
