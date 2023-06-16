import { configureStore } from '@reduxjs/toolkit';
import channelReducer from './ChannelSlice'
import CategoryReducer from './CategorySlice';
const store = configureStore({
  reducer: {
    channel: channelReducer,
    category:CategoryReducer
  }
});

export default store;
