import {createSlice} from '@reduxjs/toolkit';
  const channelSlice = createSlice({
    name: 'channel',
    initialState: {
      channelId: 'sdsdsdsds',
      channelName:'name',
      
    },
    reducers: {
      setChannelId: (state, action) => {
         state.channelId = action.payload;
        //  console.log(action.payload)
      },
      setChannelName: (state, action) => {
        state.channelName = action.payload;
        // console.log(action.payload)
     }
    }
  });
  
  export const {setChannelId,setChannelName} = channelSlice.actions;
  export default channelSlice.reducer;
  

