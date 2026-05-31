import React, { useContext } from 'react';
import { motion } from "motion/react";
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const MetricCard = ({ title, value, icon, subtitle }) => (
    <div className='flex items-center gap-4 p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all'>
        <div className='bg-blue-50 p-4 rounded-full'>
            <img width={28} src={icon} alt={title} className='opacity-80' />
        </div>
        <div>
            <h3 className='text-gray-500 text-sm font-medium'>{title}</h3>
            <p className='text-2xl font-bold text-gray-800'>{value}</p>
            {subtitle && <p className='text-xs text-gray-400 mt-1'>{subtitle}</p>}
        </div>
    </div>
);

const Dashboard = () => {
  const { user, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='flex flex-col min-h-[70vh] my-10 max-w-6xl mx-auto w-full'
    >
      <div className='mb-10'>
        <h1 className='text-3xl font-semibold mb-2'>Welcome back, {user ? user.name : 'Creator'}!</h1>
        <p className='text-gray-600'>Here's an overview of your creative workspace.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          <MetricCard title="Images Generated" value="124" icon={assets.step_icon_2} subtitle="Last 30 days" />
          <MetricCard title="Total Downloads" value="89" icon={assets.step_icon_3} subtitle="All time" />
          <MetricCard title="Favorite Tool" value="Editor" icon={assets.star_icon} subtitle="Used 45 times" />
          <MetricCard title="Credit Balance" value={credit} icon={assets.credit_star} subtitle="Available" />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 bg-white shadow-md rounded-xl p-6'>
              <h2 className='text-xl font-medium mb-6 text-gray-800 border-b pb-2'>Recent Generations</h2>
              <div className='flex gap-4 overflow-x-auto pb-4'>
                  {Array(4).fill('').map((_, idx) => (
                      <div key={idx} className='min-w-[150px] relative group cursor-pointer rounded-lg overflow-hidden'>
                          <img src={idx % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} alt="Recent" className='w-full h-36 object-cover group-hover:scale-110 transition-transform' />
                      </div>
                  ))}
              </div>
          </div>

          <div className='bg-white shadow-md rounded-xl p-6 flex flex-col'>
              <h2 className='text-xl font-medium mb-6 text-gray-800 border-b pb-2'>Quick Actions</h2>
              <div className='flex flex-col gap-3'>
                  <button onClick={() => navigate('/result')} className='w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-100 flex items-center gap-3 transition-colors'>
                      <img src={assets.step_icon_1} width={20} alt="" />
                      <span>New Image Generation</span>
                  </button>
                  <button onClick={() => navigate('/editor')} className='w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-100 flex items-center gap-3 transition-colors'>
                      <img src={assets.step_icon_2} width={20} alt="" />
                      <span>Edit an Image</span>
                  </button>
                  <button onClick={() => navigate('/tools')} className='w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-100 flex items-center gap-3 transition-colors'>
                      <img src={assets.star_icon} width={20} alt="" />
                      <span>Explore Tools</span>
                  </button>
                  <button onClick={() => navigate('/buy-credit')} className='w-full text-left p-3 mt-auto rounded-lg bg-gray-900 text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors'>
                      Buy More Credits
                  </button>
              </div>
          </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
