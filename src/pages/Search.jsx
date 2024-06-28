import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const Search = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const accessKey = '-0l22hnYCqomsJY2ToywZm_iCt5dOO1lY4KPqQ3_0Ew'; // Replace with your actual access key
  const apiUrl = 'https://api.unsplash.com/search/photos';

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(apiUrl, {
        params: { query: query },
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Search Page</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex items-center max-w-lg mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images..."
            className="flex-grow py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-lg font-bold mb-2">{image.alt_description}</p>
              <p className="text-sm text-gray-600">By {image.user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Search;
