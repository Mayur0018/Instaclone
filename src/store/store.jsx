import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';
import authReducer from '../features/authSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});
