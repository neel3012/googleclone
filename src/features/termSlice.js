import { createSlice } from '@reduxjs/toolkit';
export const termSlice = createSlice({
  name: 'userinput',
  initialState:{
   term:'',
   
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   
   getinput:(state,action)=>{
       state.term=action.payload;
   },
  
    // Use the PayloadAction type to declare the contents of `action.payload`
    
  },
  
});

export const { getinput} = termSlice.actions;


export const getdata=(state)=>state.userinput.term;
export default termSlice.reducer;
