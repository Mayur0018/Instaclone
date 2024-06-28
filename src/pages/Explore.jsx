import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const accessKey = '-0l22hnYCqomsJY2ToywZm_iCt5dOO1lY4KPqQ3_0Ew';

const Explore = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=16`)
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images from Unsplash', error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Explore</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(image => (
          <div key={image.id} className="rounded overflow-hidden shadow-lg">
            <img src={image.urls.regular} alt={image.description} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Explore;
