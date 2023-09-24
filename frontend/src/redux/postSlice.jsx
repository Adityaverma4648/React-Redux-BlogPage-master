import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    loading : true,
    posts : []
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
        const checkUnique = (x) => x.id === action.payload.id;      
        if (state.posts.some(checkUnique)) {
          return {
            ...state,
            saved: [...state.posts],
          };
        } else {
          return {
            ...state,
            saved: [...state.posts, action.payload],
          };
        }  
      },
      removePost: (state, action) => {
        const removeItem = state.posts.filter((item) => item.id !== action.payload);
        state.posts = removeItem;
      },
      setPosts: (state , action) =>{
        state.posts = action.payload;
        state.loading = false
      }
  },
  extraReducers: {
   
  },
});

export const { setPosts , removePost, addPost  } = postSlice.actions;
export default postSlice.reducer;
