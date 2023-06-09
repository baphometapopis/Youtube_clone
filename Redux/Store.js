import { configureStore } from '@reduxjs/toolkit';
import channelReducer from './ChannelSlice'
const store = configureStore({
  reducer: {
    channel: channelReducer,
  }
});

export default store;
