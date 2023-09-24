// src/actions/blogActions.js
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setPosts} from "../redux/postSlice";

const dispatch = useDispatch();

export const createBlogPost = (data) => async (dispatch) => {
  try {
    const response = await axios.post('/api/blog/create', data);
    console.log(response.data); // Handle the response as needed
  } catch (error) {
    console.error(error);
  }
};

export const fetchBlogPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/blog/posts');
    dispatch(setPosts(response.data));
  } catch (error) {
    console.error(error);
  }
};
