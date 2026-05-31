import { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import ToolsHub from './pages/ToolsHub'
import Editor from './pages/Editor'
import Variations from './pages/Variations'
import AvatarStudio from './pages/AvatarStudio'
import LogoGenerator from './pages/LogoGenerator'
import ThumbnailGenerator from './pages/ThumbnailGenerator'
import PosterGenerator from './pages/PosterGenerator'
import SocialStudio from './pages/SocialStudio'
import BrandKit from './pages/BrandKit'
import PromptLibrary from './pages/PromptLibrary'
import Gallery from './pages/Gallery'
import Workspace from './pages/Workspace'
import ChatAssistant from './pages/ChatAssistant'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

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
        <Route path="/tools" element={<ToolsHub />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/variations" element={<Variations />} />
        <Route path="/avatar" element={<AvatarStudio />} />
        <Route path="/logo" element={<LogoGenerator />} />
        <Route path="/thumbnail" element={<ThumbnailGenerator />} />
        <Route path="/poster" element={<PosterGenerator />} />
        <Route path="/social" element={<SocialStudio />} />
        <Route path="/brand-kit" element={<BrandKit />} />
        <Route path="/prompts" element={<PromptLibrary />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/chat" element={<ChatAssistant />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
