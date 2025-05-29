import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950 dark:to-purple-900 -z-10">
        {/* Stars background - only visible in dark mode */}
        <div className={`absolute inset-0 ${isDarkMode ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Layout;