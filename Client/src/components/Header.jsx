import React, { use } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react"
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const {user,setShowLogin}=useContext(AppContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        if(user){
            navigate('/result');
        }
        else{
            setShowLogin(true);
        }
    }
  return (
    <motion.div className='flex flex-col items-center justify-center text-center my-20'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}>

        <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border-neutral-500'
        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.2}}>
            <p>Transform Ideas into Stunning Images in Seconds</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>

        <motion.h1 className='text-4xl max-w-[300px] sm:text-5xl sm:max-w-[590px] mx-auto mt-10 text-center'>Scribble AI – Where<span className='text-indigo-600'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4,duration:2}}> Words </span> Become <span className='text-indigo-600'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4,duration:2}}>Art</span></motion.h1>

        <motion.p className='text-center max-w-xl mx-auto mt-5'
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.6,duration:0.8}}>Unleash the power of AI to bring your imagination to life. Simply type, click, and watch as Scribble AI turns your words into breathtaking visuals—faster than ever. Perfect for artists, marketers, storytellers, and dreamers.</motion.p>

        <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}}>
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </motion.button>

        <motion.div className='flex flex-wrap justify-center items-center gap-4 mt-10'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1,duration:1}}>
            {Array(6).fill('').map((item, index) => (
                <motion.img 
                whileHover={{scale:1.05,duration:0.1}}
                className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' key={index} src={index%2===0 ? assets.sample_img_2 : assets.sample_img_1} alt="" width={70}/>
            ))}
        </motion.div>

        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2,duration:0.8}} className='mt-2 text-neutral-600'>Generated Images from ScibbleAI</motion.p>

        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2,duration:0.8}} className='mt-2 text-neutral-600'>Create. Inspire. Amaze.
        </motion.p>
    </motion.div>
  )
}

export default Header