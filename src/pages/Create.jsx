import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postsSlice';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../components/Navbar';

const Create = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [imageName, setImageName] = useState('');
  const [username, setUsername] = useState('');
  const [caption, setCaption] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState('');

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImageName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicturePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageFile && username) {
      const imageURL = imagePreview;
      const profilePictureURL = profilePicturePreview;

      const newPost = {
        id: uuidv4(),
        username: username,
        profilePicture: profilePictureURL,
        image: imageURL,
        caption: caption,
        likes: 0,
        isLiked: false,
        comments: [],
      };

      dispatch(addPost(newPost));

      // Reset form state
      setUsername('');
      setProfilePicture(null);
      setProfilePicturePreview('');
      setImageFile(null);
      setImagePreview('');
      setImageName('');
      setCaption('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 mt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Post Page</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
              Profile Picture:
            </label>
            <input
              type="file"
              id="profilePicture"
              onChange={handleProfilePictureChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {profilePicturePreview && (
              <img src={profilePicturePreview} alt="Profile Preview" className="mt-2 w-20 h-20 rounded-full mx-auto" />
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
              Upload Image:
            </label>
            <input
              type="file"
              id="imageUpload"
              onChange={handleImageChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {imagePreview && <img src={imagePreview} alt="Image Preview" className="mt-2 w-full h-auto" />}
          </div>
          {imageName && <p className="text-sm text-gray-500 mb-4 text-center">Selected Image: {imageName}</p>}
          <div className="mb-4">
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
              Caption:
            </label>
            <textarea
              id="caption"
              value={caption}
              onChange={handleCaptionChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Create Post
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
