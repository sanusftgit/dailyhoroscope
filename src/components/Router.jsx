import React, { createContext, useContext, useState } from 'react';

const RouterContext = createContext();

export function BrowserRouter({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listen for location changes
  React.useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

// Custom Link component
BrowserRouter.Link = function Link({ to, children, className }) {
  const { navigate } = useContext(RouterContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Route component
BrowserRouter.Route = function Route({ path, component: Component }) {
  const { currentPath } = useContext(RouterContext);
  
  // Simple path matching
  if (currentPath === path) {
    return <Component />;
  }
  
  return null;
};

export default BrowserRouter;