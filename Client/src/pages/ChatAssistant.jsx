import React, { useState } from 'react';
import { motion } from "motion/react";
import { assets } from '../assets/assets';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
      { id: 1, sender: 'bot', text: 'Hello! I am your AI Creative Assistant. How can I help you today? I can help you improve prompts, suggest color palettes, or brainstorm ideas!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
      e.preventDefault();
      if (!input.trim()) return;
      
      const newMsg = { id: Date.now(), sender: 'user', text: input };
      setMessages([...messages, newMsg]);
      setInput('');

      // Mock bot response
      setTimeout(() => {
          setMessages(prev => [...prev, { 
              id: Date.now() + 1, 
              sender: 'bot', 
              text: 'That sounds like a great idea! Try using this prompt: "A cinematic, ultra-detailed 4k render of ' + newMsg.text + ', vibrant colors, unreal engine 5 style."' 
          }]);
      }, 1000);
  };

  return (
    <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='flex flex-col min-h-[75vh] my-10 max-w-4xl mx-auto w-full'
    >
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-semibold mb-2'>AI Chat Assistant</h1>
        <p className='text-gray-600'>Brainstorm ideas, refine prompts, and discover new styles.</p>
      </div>

      <div className='flex-1 bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden border border-gray-100'>
          
          <div className='flex-1 p-6 overflow-y-auto flex flex-col gap-6 bg-gray-50/50'>
              {messages.map(msg => (
                  <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <img 
                          src={msg.sender === 'bot' ? assets.step_icon_3 : assets.profile_icon} 
                          alt="avatar" 
                          className={`w-10 h-10 rounded-full ${msg.sender === 'bot' ? 'bg-blue-100 p-2' : ''}`} 
                      />
                      <div className={`max-w-[70%] p-4 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-gray-900 text-white rounded-tr-none' : 'bg-white shadow-sm border border-gray-100 rounded-tl-none text-gray-800'}`}>
                          {msg.text}
                      </div>
                  </div>
              ))}
          </div>

          <form onSubmit={handleSend} className='p-4 bg-white border-t border-gray-100 flex gap-4 items-center'>
              <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me for a prompt idea..." 
                  className='flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 outline-none focus:ring-1 focus:ring-blue-500 text-sm'
              />
              <button type="submit" className='bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform'>
                  Send
              </button>
          </form>
      </div>
    </motion.div>
  );
};

export default ChatAssistant;
