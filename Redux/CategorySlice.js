import {createSlice} from '@reduxjs/toolkit';
  const categorySlice = createSlice({
    name: 'category',
    initialState: {
      categoryId: '1',
      channelName:'name',
      
    },
    reducers: {
      setCategoryId: (state, action) => {
         state.categoryId = action.payload;
        console.log(action.payload)
      },
   
    }
  });
  
  export const {setCategoryId} = categorySlice.actions;
  export default categorySlice.reducer;
  

