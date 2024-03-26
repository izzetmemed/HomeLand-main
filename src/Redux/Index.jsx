import { configureStore } from '@reduxjs/toolkit';
import deleteBasketReducer from './DeleteBasket';

export const store = configureStore({
  reducer: {
    deleteBasket: deleteBasketReducer,
  },
});
