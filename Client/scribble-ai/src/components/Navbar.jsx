import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Navbar = () => {
  const {user,setShowLogin,logout,credit}=useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <img src={assets.new_logo_} alt="" className='w-18 rounded-2xl' />
      </Link>

      <div>
        {
          user ?
            <div className='flex items-center gap-2 sm:gap-4'>
              <button onClick={()=>navigate('/buy-credit')}className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 trasnsition-all duration-200'>
                <img src={assets.credit_star} alt="" />
                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left :{credit}</p>
              </button>
                <p className='text-gray-600 max-sm:hidden'>Hi, {user.name}</p>
                <div className='relative group'>
                  <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />

                  <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                    <ul onClick={logout} className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                      <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                    </ul>
                  </div>
                </div>
              
            </div>
            :
            <div className='flex items-center gap-2 sm:gap-4'>
              <p onClick={()=>navigate('/buy-credit')} className='bg-gray-800 text-white px-7 py-2 sm:px-7 text-sm rounded-full cursor-pointer '>Pricing</p>
              <button onClick={()=>setShowLogin(true)} className='bg-gray-800 text-white px-7 py-2 sm:px-7 text-sm rounded-full cursor-pointer'>Login</button>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar