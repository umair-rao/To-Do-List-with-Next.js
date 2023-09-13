
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './reducer';

export const store = configureStore({
  reducer: {
    tasks: rootReducer,
  },
});

export default store;
