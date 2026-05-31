import React from 'react';
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import { 
  Image as ImageIcon, Images, UserCircle, PenTool, 
  Video, LayoutTemplate, Library, MessageSquare, 
  Palette, LayoutGrid, LayoutDashboard, FolderKanban 
} from 'lucide-react';

const ToolCard = ({ title, description, Icon, route, navigate }) => (
    <div 
        onClick={() => navigate(route)}
        className='flex flex-col items-center justify-center p-6 bg-white shadow-md cursor-pointer rounded-lg hover:scale-[1.02] transition-all duration-300 text-center gap-3 border border-transparent hover:border-blue-100'
    >
        <div className='bg-blue-50 p-3 rounded-full text-blue-500'>
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <div>
            <h2 className='text-lg font-medium text-gray-800'>{title}</h2>
            <p className='text-sm text-gray-500 mt-1'>{description}</p>
        </div>
    </div>
);

const ToolsHub = () => {
  const navigate = useNavigate();

  const categories = [
    {
        title: "Image Creation",
        tools: [
            { title: "Image Generator", description: "Text to image generation", Icon: ImageIcon, route: "/result" },
            { title: "Variations", description: "Generate image variations", Icon: Images, route: "/variations" },
            { title: "Avatar Studio", description: "Create professional AI avatars", Icon: UserCircle, route: "/avatar" }
        ]
    },
    {
        title: "Design Tools",
        tools: [
            { title: "Logo Generator", description: "Generate unique brand logos", Icon: PenTool, route: "/logo" },
            { title: "Thumbnail Maker", description: "Clickable YouTube thumbnails", Icon: Video, route: "/thumbnail" },
            { title: "Poster Design", description: "Marketing and event posters", Icon: LayoutTemplate, route: "/poster" }
        ]
    },
    {
        title: "Content Tools",
        tools: [
            { title: "Prompt Library", description: "Saved and favorite prompts", Icon: Library, route: "/prompts" },
            { title: "Chat Assistant", description: "AI helper for ideas & styles", Icon: MessageSquare, route: "/chat" },
            { title: "Brand Kit", description: "Generate brand identity assets", Icon: Palette, route: "/brand-kit" }
        ]
    },
    {
        title: "Workspace",
        tools: [
            { title: "Gallery", description: "View your generated images", Icon: LayoutGrid, route: "/gallery" },
            { title: "Dashboard", description: "Analytics and quick actions", Icon: LayoutDashboard, route: "/dashboard" },
            { title: "Workspace", description: "Manage projects & folders", Icon: FolderKanban, route: "/workspace" }
        ]
    }
  ];

  return (
    <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='flex flex-col min-h-[70vh] my-10'
    >
      <div className='text-center mb-12'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-4'>AI Creative Tools</h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Explore our suite of AI-powered design and generation tools. Everything you need to bring your imagination to life.</p>
      </div>

      <div className='flex flex-col gap-12'>
        {categories.map((category, idx) => (
            <div key={idx} className='w-full'>
                <h3 className='text-xl font-medium mb-6 text-gray-700 border-b pb-2'>{category.title}</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {category.tools.map((tool, tIdx) => (
                        <ToolCard key={tIdx} {...tool} navigate={navigate} />
                    ))}
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ToolsHub;
