import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "motion/react"

const Steps = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-20'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it Works</h1>
        <p className='text-lg text-gray-600 mb-8'>Transform Words into stunning Images</p>
        <div className='space-y-4 w-full max-w-3xl text-sm'>
            {stepsData.map((item, index) => (
                <div key={index} className='flex items-start gap-4 p-4 px-8 bg-white /20 shadow-md cursor-pointer rounded-lg hover:scale-[1.02] transition-all duration-300 '>
                    <img width={40} src={item.icon} alt="" />
                    <div>
                        <h2 className='text-xl font-medium'>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Steps