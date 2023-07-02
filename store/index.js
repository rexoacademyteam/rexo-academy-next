import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/store/slice/auth'
import themeReducer from '@/store/slice/auth'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});
