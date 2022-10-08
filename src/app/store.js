import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import termReducer from '../features/termSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    userinput:termReducer
  },
});
