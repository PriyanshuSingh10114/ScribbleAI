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

      <div className='flex items-center gap-6'>
        <div className='hidden md:flex items-center gap-6 font-medium text-gray-600 mr-4'>
          <Link to='/' className='hover:text-black transition-colors'>Home</Link>
          <Link to='/tools' className='hover:text-black transition-colors'>Tools</Link>
          <Link to='/buy-credit' className='hover:text-black transition-colors'>Pricing</Link>
        </div>

        {
          user ?
            <div className='flex items-center gap-2 sm:gap-4'>
              <button onClick={()=>navigate('/buy-credit')}className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 trasnsition-all duration-200'>
                <img src={assets.credit_star} alt="" />
                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left :{credit}</p>
              </button>
                <p className='text-gray-600 max-sm:hidden'>Hi, {user.name}</p>
                
                <p onClick={()=>navigate('/dashboard')} className='text-gray-600 cursor-pointer max-sm:hidden hover:text-black transition-colors'>Dashboard</p>
                
                <div className='relative group'>
                  <img src={assets.profile_icon} className='w-10 drop-shadow cursor-pointer' alt="" />

                  <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                      <li onClick={() => navigate('/profile')} className='py-1 px-2 cursor-pointer pr-10 border-b pb-2 mb-2 hover:bg-gray-100 rounded'>Profile</li>
                      <li onClick={() => navigate('/dashboard')} className='md:hidden py-1 px-2 cursor-pointer pr-10 border-b pb-2 mb-2 hover:bg-gray-100 rounded'>Dashboard</li>
                      <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10 hover:bg-gray-100 rounded'>Logout</li>
                    </ul>
                  </div>
                </div>
              
            </div>
            :
            <div className='flex items-center gap-2 sm:gap-4'>
              <button onClick={()=>setShowLogin(true)} className='bg-gray-800 text-white px-7 py-2 sm:px-7 text-sm rounded-full cursor-pointer hover:scale-105 transition-all duration-200'>Login</button>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar