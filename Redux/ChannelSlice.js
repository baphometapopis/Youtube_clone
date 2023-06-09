import {createSlice} from '@reduxjs/toolkit';
  const channelSlice = createSlice({
    name: 'channel',
    initialState: {
      channelId: 'sdsdsdsds'
    },
    reducers: {
      setChannelId: (state, action) => {
         state.channelId = action.payload;
         console.log(action.payload)
      }
    }
  });
  
  export const {setChannelId} = channelSlice.actions;
  export default channelSlice.reducer;
  

