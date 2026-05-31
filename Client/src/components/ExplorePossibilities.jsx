import React from 'react';
import { motion } from "motion/react";
import { assets } from '../assets/assets';

const ExplorePossibilities = () => {
    const categories = [
        { title: 'AI Art', img: assets.sample_img_1 },
        { title: 'Logos', img: assets.sample_img_2 },
        { title: 'Avatars', img: assets.sample_img_1 },
        { title: 'Thumbnails', img: assets.sample_img_2 },
        { title: 'Posters', img: assets.sample_img_1 },
    ];

    return (
        <motion.div
            initial={{opacity:0.2,y:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className='flex flex-col items-center justify-center my-24'
        >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Explore Possibilities</h1>
            <p className='text-lg text-gray-600 mb-10'>See what you can create with Scribble AI</p>

            <div className='flex flex-wrap justify-center gap-6 w-full max-w-6xl'>
                {categories.map((item, index) => (
                    <div key={index} className='relative group cursor-pointer overflow-hidden rounded-xl shadow-lg'>
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className='w-56 h-56 object-cover group-hover:scale-110 transition-transform duration-500' 
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
                            <h3 className='text-white text-xl font-medium'>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default ExplorePossibilities;
