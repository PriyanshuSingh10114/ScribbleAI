import React from 'react';
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import { Image as ImageIcon, Wand2, UserCircle, PenTool, Video, MessageSquare } from 'lucide-react';

const PopularTools = () => {
    const navigate = useNavigate();

    const tools = [
        { title: 'AI Image Generator', desc: 'Text to image generation', Icon: ImageIcon, route: '/result' },
        { title: 'Image Editor', desc: 'Edit and enhance images', Icon: Wand2, route: '/editor' },
        { title: 'Avatar Studio', desc: 'Professional AI avatars', Icon: UserCircle, route: '/avatar' },
        { title: 'Logo Generator', desc: 'Unique brand logos', Icon: PenTool, route: '/logo' },
        { title: 'Thumbnail Generator', desc: 'YouTube thumbnails', Icon: Video, route: '/thumbnail' },
        { title: 'AI Chat Assistant', desc: 'Your creative helper', Icon: MessageSquare, route: '/chat' },
    ];

    return (
        <motion.div
            initial={{opacity:0.2,y:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className='flex flex-col items-center justify-center my-20'
        >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Popular AI Tools</h1>
            <p className='text-lg text-gray-600 mb-8'>Discover our most used creative features</p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl'>
                {tools.map((tool, index) => {
                    const IconComponent = tool.Icon;
                    return (
                        <div 
                            key={index} 
                            onClick={() => navigate(tool.route)}
                            className='flex items-center gap-4 p-4 bg-white shadow-md cursor-pointer rounded-lg hover:scale-[1.02] transition-all duration-300'
                        >
                            <div className='bg-blue-50 p-3 rounded-full text-blue-500'>
                                <IconComponent size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className='text-lg font-medium text-gray-800'>{tool.title}</h2>
                                <p className='text-sm text-gray-500'>{tool.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default PopularTools;
