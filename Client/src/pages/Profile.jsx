import React, { useContext } from 'react';
import { motion } from "motion/react";
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Profile = () => {
  const { user, credit } = useContext(AppContext);

  return (
    <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='flex flex-col min-h-[70vh] my-10 max-w-4xl mx-auto w-full gap-8'
    >
      <div className='bg-white shadow-md rounded-xl p-8 flex flex-col md:flex-row items-center gap-8'>
          <div className='relative'>
              <img src={assets.profile_icon} alt="Profile" className='w-24 h-24 rounded-full border-4 border-blue-50' />
              <button className='absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full hover:bg-blue-600 text-xs w-8 h-8 flex items-center justify-center shadow'>
                  ✎
              </button>
          </div>
          <div className='text-center md:text-left'>
              <h1 className='text-3xl font-semibold'>{user ? user.name : 'Guest User'}</h1>
              <p className='text-gray-500 mt-1'>{user ? user.email : 'guest@example.com'}</p>
              <p className='inline-block mt-3 bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full'>Pro Plan</p>
          </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white shadow-md rounded-xl p-8'>
              <h2 className='text-xl font-medium mb-6 text-gray-800 border-b pb-2'>Account Settings</h2>
              <div className='space-y-4'>
                  <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Display Name</label>
                      <input type="text" defaultValue={user ? user.name : ''} className='w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-500' />
                  </div>
                  <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
                      <input type="email" defaultValue={user ? user.email : ''} className='w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-500' />
                  </div>
                  <button className='bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm hover:bg-gray-800'>Save Changes</button>
              </div>
          </div>

          <div className='bg-white shadow-md rounded-xl p-8'>
              <h2 className='text-xl font-medium mb-6 text-gray-800 border-b pb-2'>Credit & Billing</h2>
              <div className='bg-blue-50 rounded-lg p-4 flex justify-between items-center mb-6'>
                  <div>
                      <p className='text-sm text-gray-600 font-medium'>Available Credits</p>
                      <p className='text-3xl font-bold text-gray-900'>{credit}</p>
                  </div>
                  <img src={assets.credit_star} alt="" className='w-10' />
              </div>
              <h3 className='text-sm font-medium text-gray-700 mb-3'>Recent History</h3>
              <ul className='space-y-3 text-sm'>
                  <li className='flex justify-between border-b pb-2'>
                      <span className='text-gray-600'>Generated 1 Image</span>
                      <span className='text-red-500 font-medium'>-1</span>
                  </li>
                  <li className='flex justify-between border-b pb-2'>
                      <span className='text-gray-600'>Generated Avatar</span>
                      <span className='text-red-500 font-medium'>-2</span>
                  </li>
                  <li className='flex justify-between border-b pb-2'>
                      <span className='text-gray-600'>Purchased Pro Pack</span>
                      <span className='text-green-500 font-medium'>+500</span>
                  </li>
              </ul>
          </div>
      </div>
    </motion.div>
  );
};

export default Profile;
