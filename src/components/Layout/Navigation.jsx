import React from 'react';
import { MessageCircle, Sun, Star, Home, Menu } from 'lucide-react';
import { BrowserRouter } from '../Router';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="flex items-center">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-indigo-600 dark:text-indigo-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile menu */}
      <div className={`
        md:hidden fixed inset-0 z-50 bg-white/95 dark:bg-indigo-950/95 backdrop-blur-sm
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-4 space-y-2">
          
          
          <MobileNavItem to="/" icon={<Sun size={20} />} label="Horoscope" onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        <NavItem to="/" icon={<Sun size={18} />} label="Horoscope" />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  const [isActive, setIsActive] = React.useState(window.location.pathname === to);

  React.useEffect(() => {
    const checkActive = () => setIsActive(window.location.pathname === to);
    window.addEventListener('popstate', checkActive);
    return () => window.removeEventListener('popstate', checkActive);
  }, [to]);

  return (
    <BrowserRouter.Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200' 
          : 'text-indigo-500 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-800/50'
      }`}
      onClick={() => setIsActive(true)}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </BrowserRouter.Link>
  );
};

const MobileNavItem = ({ to, icon, label, onClick }) => {
  const [isActive, setIsActive] = React.useState(window.location.pathname === to);

  React.useEffect(() => {
    const checkActive = () => setIsActive(window.location.pathname === to);
    window.addEventListener('popstate', checkActive);
    return () => window.removeEventListener('popstate', checkActive);
  }, [to]);

  return (
    <BrowserRouter.Link
      to={to}
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
        isActive 
          ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200' 
          : 'text-indigo-500 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-800/50'
      }`}
      onClick={() => {
        setIsActive(true);
        onClick();
      }}
    >
      {icon}
      <span className="font-medium text-lg">{label}</span>
    </BrowserRouter.Link>
  );
};

export default Navigation;