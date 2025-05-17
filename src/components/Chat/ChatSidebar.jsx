import { Search, MessageCircle, BookOpen, Clock, Compass, Leaf, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const navigationItems = [
  {
    name: "Home",
    icon: <MessageCircle className="h-5 w-5" />,
    link: "#",
    active: true,
    iconBg: "bg-green-500 text-white",
    textClass: "font-medium",
  },
  {
    name: "Library",
    icon: <BookOpen className="h-5 w-5" />,
    link: "#",
    active: false,
    iconBg: "bg-gray-200 text-gray-500",
    textClass: "font-medium text-gray-700",
  },
  {
    name: "History",
    icon: <Clock className="h-5 w-5" />,
    link: "#",
    active: false,
    iconBg: "bg-gray-200 text-gray-500",
    textClass: "font-medium text-gray-700",
  },
  {
    name: "Explore",
    icon: <Compass className="h-5 w-5" />,
    link: "#",
    active: false,
    iconBg: "bg-gray-200 text-gray-500",
    textClass: "font-medium text-gray-700",
  },
]

export default function ChatSidebar({ isCollapsed, setIsCollapsed, isHistoryLoading, recentChats }) {
  const [activeTab, setActiveTab] = useState(0);
  const params = useParams();
  const { id: activeChatId } = params;
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`w-full bg-gray-50 h-screen flex flex-col ${
        isCollapsed ? 'max-w-[80px]' : 'max-w-xs'
    }`}>
      <div 
        className={`h-full w-full bg-gray-50 transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="h-full p-4 flex flex-col items-center justify-center">
          {/* Logo section */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              <img src="/Logo.svg" alt="Icon" className="h-12 w-12" />
              <span className={`font-bold text-2xl ml-2 whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'hidden' : 'block'}`}>
                Lumos.ai
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className={`relative mb-4 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for chats..."
              className="w-full py-2 pl-10 pr-4 bg-white rounded-md border border-gray-200 text-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-3 mb-6 w-full">
            {navigationItems.map((item, idx) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => handleTabClick(idx)}
                className={`flex transition-all items-center ${isCollapsed ? 'justify-center aspect-square' : 'justify-start px-3'} py-2 rounded-3xl border-2 border-[#f3f3f3] ${
                  idx === activeTab
                    ? "bg-white shadow-sm"
                    : "hover:bg-white/80 transition-colors"
                }`}
                title={isCollapsed ? item.name : ''}
              >
                <div className={`w-8 h-8 flex transition-all items-center justify-center rounded-full ${
                  idx === activeTab && "bg-green-500 text-white"
                }`}>
                  {item.icon}
                </div>
                <span className={`ml-3 ${item.textClass} whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'hidden' : 'block'}`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Recent Chats - with transition for content visibility */}
          <div className={`flex flex-col flex-1 overflow-y-auto w-full ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-gray-700">Recent Chats</h3>
            </div>
            <ul className={`space-y-2 ${isHistoryLoading && 'flex-1 flex items-center justify-center'}`}>
              {isHistoryLoading
              ?
                <li className="flex justify-center items-center py-6 flex-1">
                  <img src="/Logo.svg" alt="Loading..." className="h-20 w-20 animate-spin" />
                </li>
              :
               recentChats.map((chat, index) => (
                <li key={index}>
                  <Link to={"/chat/"+chat?.id} className={`block text-base text-gray-600 hover:text-gray-900 truncate py-1
                    ${activeChatId == chat?.id ? 'font-semibold text-green-500' : ''}`}
                    title={isCollapsed ? chat?.title : ''}
                  >
                    {chat?.title}
                  </Link>
                </li>
              ))}
            </ul>
            {
              !isHistoryLoading &&
              <Link to="#" className="text-base text-green-600 hover:text-green-700 mt-2 inline-block">
                View All →
              </Link>
            }
          </div>

          {/* Pro Upgrade */}
          <div className={`w-full mt-4 bg-white rounded-lg transition-all duration-300 shadow-sm flex items-center ${isCollapsed ? 'justify-center p-2 h-fit' : 'justify-between p-3'}`}>
            <div className={`transition-opacity duration-200 ${isCollapsed ? 'hidden w-0 overflow-hidden' : 'opacity-100'}`}>
              <h4 className="font-medium text-gray-900">Try Pro!</h4>
              <p className="text-xs text-gray-500">Upgrade for smarter AI and more...</p>
            </div>
            <div className="w-10 h-10 flex-shrink-0 transition-all hover:opacity-60 cursor-pointer flex items-center justify-center rounded-full bg-green-500 text-white">
              <Leaf className="h-6 w-6" />
            </div>
          </div>

          {/* User Profile */}
          <div className={`w-full flex items-center mt-3 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between px-4 py-2 bg-white border border-[#F3F3F3] rounded-xl'}`}>
            <div className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
              <div className="relative flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
                <img
                  src="https://xsgames.co/randomusers/assets/images/favicon.png"
                  alt="Profile"
                />
              </div>
              <div className={`transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'ml-3 opacity-100'}`}>
                <h5 className="font-semibold">Okba Allaoua</h5>
              </div>
            </div>
            <div className={`flex items-center justify-center w-10 h-10 aspect-square bg-[#F3F3F3] transition-all cursor-pointer hover:opacity-60 rounded-full ${isCollapsed ? 'hidden' : 'block'}`}>
              <img src="/images/Chat/IconBubble.svg" alt="IconBubble" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle button */}
      <button 
        onClick={toggleSidebar}
        className="absolute top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1.5 z-10 shadow-md hover:bg-gray-50 transition-all duration-300"
        style={{ left: isCollapsed ? '4rem' : '19rem' }}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4 text-gray-500" /> : <ChevronLeft className="h-4 w-4 text-gray-500" />}
      </button>
    </div>
  )
}