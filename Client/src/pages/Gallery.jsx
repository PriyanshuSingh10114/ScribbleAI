import React, { useState } from 'react';
import { motion } from "motion/react";
import { assets } from '../assets/assets';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const galleryItems = [
      { id: 1, type: 'Art', img: assets.sample_img_1 },
      { id: 2, type: 'Logo', img: assets.sample_img_2 },
      { id: 3, type: 'Avatar', img: assets.sample_img_1 },
      { id: 4, type: 'Art', img: assets.sample_img_2 },
      { id: 5, type: 'Logo', img: assets.sample_img_1 },
      { id: 6, type: 'Avatar', img: assets.sample_img_2 },
  ];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='flex flex-col min-h-[70vh] my-10 max-w-6xl mx-auto w-full'
    >
      <div className='flex flex-col md:flex-row justify-between items-center mb-10 gap-4'>
        <div>
            <h1 className='text-3xl font-semibold mb-2'>Your Gallery</h1>
            <p className='text-gray-600'>Browse and manage all your generated creations.</p>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>
            <div className='flex items-center bg-white shadow-sm rounded-full px-4 py-2 border border-gray-200'>
                <span className='text-gray-400 mr-2'>🔍</span>
                <input type="text" placeholder="Search creations..." className='bg-transparent outline-none text-sm w-full sm:w-48' />
            </div>
            
            <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className='bg-white shadow-sm border border-gray-200 rounded-full px-4 py-2 outline-none text-sm text-gray-700 cursor-pointer'
            >
                <option value="All">All Categories</option>
                <option value="Art">AI Art</option>
                <option value="Logo">Logos</option>
                <option value="Avatar">Avatars</option>
            </select>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredItems.map(item => (
              <div key={item.id} className='relative group cursor-pointer overflow-hidden rounded-xl shadow-md'>
                  <img src={item.img} alt={item.type} className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500' />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4'>
                      <button className='bg-white text-black p-2 rounded-full hover:scale-110 transition-transform'>⬇️</button>
                      <button className='bg-white text-black p-2 rounded-full hover:scale-110 transition-transform'>❤️</button>
                  </div>
                  <span className='absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded'>{item.type}</span>
              </div>
          ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
