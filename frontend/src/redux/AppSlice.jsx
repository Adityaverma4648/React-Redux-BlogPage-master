import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    loading : true,
    signInModal : false,
    signUpModal : false,
    createPostModal : false,
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
     setShowSignInModal : (state, action)=>{
        state.signInModal = action.payload
        state.loading = false
     },
     setShowSignUpModal : (state, action)=>{
        state.signUpModal = action.payload
        state.loading = false
     },
     setCreatePostModal : (state, action)=>{
      state.signInModal = action.payload
      state.loading = false
   },
  }
});

export const { setShowSignInModal , setShowSignUpModal , setCreatePostModal  } = AppSlice.actions;
export default AppSlice.reducer;