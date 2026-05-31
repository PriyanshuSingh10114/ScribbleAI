import React from 'react';
import { motion } from "motion/react";

const PromptLibrary = () => {
  return (
    <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='flex flex-col items-center justify-center min-h-[70vh]'
    >
      <h1 className='text-3xl font-bold mb-4'>PromptLibrary</h1>
      <p className='text-gray-500 mb-8'>This module is under development.</p>
      <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full'>
        <input 
          type="text" 
          placeholder='Start typing...' 
          className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' 
        />
        <button className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Submit</button>
      </div>
    </motion.div>
  );
};

export default PromptLibrary;
