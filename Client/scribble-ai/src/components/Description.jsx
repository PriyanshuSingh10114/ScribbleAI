import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
     className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold'>Create AI Images </h1>
        <p className='text-grey-500 mb-8'>Turn Your Imagination into visuals</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
        <div>
        <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-powered Text to Image Generator</h2>

        <p className='text-justify'>Introducing Scribble AI – the cutting-edge, AI-powered Text to Image Generator that transforms your words into stunning visuals with just a few clicks! Whether you're an artist seeking inspiration, a marketer crafting eye-catching ads, or a storyteller bringing ideas to life, Scribble AI turns your descriptions into high-quality, detailed images effortlessly. Powered by advanced machine learning, it interprets your text with remarkable accuracy, generating vibrant, creative, and customizable artwork in seconds.</p>

        <p className='text-justify'>Say goodbye to creative blocks and hello to limitless possibilities with Scribble AI – where imagination meets innovation!</p>
            </div>
        </div> 
    </motion.div>
  )
}

export default Description