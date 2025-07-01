import { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Login from './components/Login'
import './App.css'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'

function App() {
  const {showLogin}=useContext(AppContext);

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen bg-gradient-to-b from-rose-50 via-cyan-50 to-blue-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
