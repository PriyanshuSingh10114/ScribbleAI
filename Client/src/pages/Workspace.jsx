import React from 'react';
import { motion } from "motion/react";
import { assets } from '../assets/assets';

const Workspace = () => {
  const folders = [
      { id: 1, name: 'Marketing Campaign Q3', count: 12 },
      { id: 2, name: 'Social Media Assets', count: 45 },
      { id: 3, name: 'Client Logos', count: 8 },
      { id: 4, name: 'Blog Thumbnails', count: 24 }
  ];

  return (
    <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='flex flex-col min-h-[70vh] my-10 max-w-6xl mx-auto w-full'
    >
      <div className='flex justify-between items-center mb-10'>
        <div>
            <h1 className='text-3xl font-semibold mb-2'>Project Workspace</h1>
            <p className='text-gray-600'>Organize your creations into specific projects and folders.</p>
        </div>
        <button className='bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm hover:scale-105 transition-transform'>
            + New Folder
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {folders.map(folder => (
              <div key={folder.id} className='bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg border border-transparent hover:border-blue-100 transition-all'>
                  <div className='flex justify-between items-start mb-4'>
                      <div className='bg-yellow-50 p-3 rounded-lg'>
                          <span className='text-2xl'>📁</span>
                      </div>
                      <span className='text-gray-400 hover:text-black cursor-pointer'>⋮</span>
                  </div>
                  <h3 className='font-medium text-gray-800 mb-1'>{folder.name}</h3>
                  <p className='text-sm text-gray-500'>{folder.count} items</p>
              </div>
          ))}
      </div>
    </motion.div>
  );
};

export default Workspace;
