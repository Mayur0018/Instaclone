import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('posts', JSON.stringify(state));
    },
    setPosts: (state, action) => {
      return action.payload;
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      const updatedPosts = state.filter(post => post.id !== postId);
      state = updatedPosts;
      localStorage.setItem('posts', JSON.stringify(state));
      return state;
    },
    likePost: (state, action) => {
      const postId = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        post.isLiked = !post.isLiked;
        if (post.isLiked) {
          post.likes++;
        } else {
          post.likes--;
        }
        localStorage.setItem('posts', JSON.stringify(state));
      }
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        post.comments.push(comment);
        localStorage.setItem('posts', JSON.stringify(state));
      }
    },
  },
});

export const { addPost, setPosts, deletePost, likePost, addComment } = postsSlice.actions;
export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
