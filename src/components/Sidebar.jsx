import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const sidebarItems = [
  {
    title: "خانه",
    href: "/",
    icon: "🏠"
  },
  {
    title: "فروشگاه",
    href: "/store", 
    icon: "🛍️"
  },
  {
    title: "تست",
    href: "/test", 
    icon: "🧪"
  }
];

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} h-full bg-white border-l border-neutral-cold-200 shadow-lg transition-all duration-300 ease-in-out flex flex-col`}>
      {/* Header - Fixed */}
      <div className={`${isOpen ? 'p-4' : 'p-2'} border-b border-neutral-cold-100 transition-all duration-300 flex-shrink-0`}>
        <div className="flex items-center gap-3 relative group">
          {/* Avatar/Logo */}
          <div 
            className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md cursor-pointer hover:shadow-lg transition-all duration-200"
            onClick={() => !isOpen && setIsOpen(true)}
            title={!isOpen ? "باز کردن منو" : ""}
          >
            <span className="text-white text-sm font-bold">VP</span>
          </div>

          {/* Hover button for collapsed state */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-primary-600 shadow-md z-10"
              title="باز کردن منو"
            >
              <svg className="w-3 h-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Title and close button for open state */}
          {isOpen && (
            <div className="flex items-center justify-between flex-1 overflow-hidden">
              <div className="overflow-hidden transition-all duration-300">
                <h2 className="font-semibold text-neutral-cold-800 whitespace-nowrap">ویدیو پلیر</h2>
                <p className="text-xs text-neutral-cold-500 whitespace-nowrap">React App</p>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-neutral-cold-100 transition-all duration-200 text-neutral-cold-500 hover:text-neutral-cold-700"
                title="بستن منو"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation - Scrollable if needed */}
      <nav className={`${isOpen ? 'p-4' : 'p-2'} transition-all duration-300 flex-1 overflow-y-auto`}>
        {isOpen && (
          <h3 className="text-sm font-medium text-neutral-cold-500 mb-4 px-2">منوی اصلی</h3>
        )}
        <div className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all duration-200 group relative ${
                  isActive 
                    ? "bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 font-medium shadow-sm border border-primary-200" 
                    : "text-neutral-cold-700 hover:bg-neutral-cold-50 hover:text-neutral-cold-900 hover:shadow-sm"
                } ${!isOpen ? 'justify-center' : ''}`}
                title={!isOpen ? item.title : ""}
              >
                <span className={`text-lg flex-shrink-0 transition-all duration-200 ${
                  isActive ? 'scale-110' : 'group-hover:scale-105'
                }`}>
                  {item.icon}
                </span>
                {isOpen && (
                  <span className="whitespace-nowrap overflow-hidden transition-all duration-300">
                    {item.title}
                  </span>
                )}
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary-500 rounded-r-full"></div>
                )}
                
                {/* Tooltip for collapsed state */}
                {!isOpen && (
                  <div className="absolute right-full mr-3 px-3 py-2 bg-neutral-cold-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-10 shadow-lg">
                    {item.title}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-neutral-cold-800"></div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}