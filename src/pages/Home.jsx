import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, setPosts, deletePost, likePost, addComment } from '../features/postsSlice';
import { FaEllipsisV, FaHeart, FaRegHeart, FaComment } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      dispatch(setPosts(JSON.parse(storedPosts)));
    }
  }, [dispatch]);

  const handleDelete = (postId) => {
    setPostIdToDelete(postId);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    if (postIdToDelete) {
      dispatch(deletePost(postIdToDelete));
      setShowDeleteConfirmation(false);
      setPostIdToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setPostIdToDelete(null);
  };

  const handleLike = (postId) => {
    dispatch(likePost(postId));
  };

  const handleAddComment = (postId) => {
    if (commentText.trim() !== '') {
      dispatch(addComment({ postId, comment: commentText }));
      setCommentText('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 mt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">Home Page</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={post.profilePicture} alt="Profile" className="w-10 h-10 rounded-full" />
                  <p className="ml-4">{post.username}</p>
                </div>
                <div className="relative">
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-gray-600 hover:text-red-600 focus:outline-none"
                  >
                    <FaEllipsisV />
                  </button>
                </div>
              </div>
              <img src={post.image} alt="Post" className="w-full h-auto mb-4" />
              <p className="mb-2">{post.caption}</p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  <button onClick={() => handleLike(post.id)} className="flex items-center space-x-1">
                    {post.isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                    <span className="text-sm text-gray-500">{post.likes}</span>
                  </button>
                  <button onClick={() => handleAddComment(post.id)} className="flex items-center space-x-1">
                    <FaComment className="text-gray-500" />
                    <span className="text-sm text-gray-500">{post.comments.length}</span>
                  </button>
                </div>
              </div>
              <div>
                {post.comments.map((comment, index) => (
                  <p key={index} className="text-sm text-gray-700 mb-1">
                    {comment}
                  </p>
                ))}
                {/* Add comment input field */}
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="border rounded-md px-2 py-1 w-full focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <button
                    onClick={() => handleAddComment(post.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delete confirmation modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this post?</p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Home;
