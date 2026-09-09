import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext();

// Helper to parse route path and anchor cleanly
function parseLocation(input) {
  if (!input) return { path: '/', anchor: '' };
  const str = input.replace(/^#/, '');
  if (!str) return { path: '/', anchor: '' };

  const parts = str.split('#');
  let rawPath = parts[0] || '/';
  const anchor = parts[1] || '';

  if (!rawPath.startsWith('/')) {
    rawPath = `/${rawPath}`;
  }
  const cleanPath = rawPath === '/' ? '/' : rawPath.replace(/\/$/, '');
  return { path: cleanPath, anchor };
}

export function RouterProvider({ children }) {
  const getInitial = () => {
    if (typeof window === 'undefined') return { path: '/', anchor: '' };
    return parseLocation(window.location.hash || window.location.pathname || '/');
  };

  const [locationState, setLocationState] = useState(getInitial);
  const currentPath = locationState.path;
  const currentAnchor = locationState.anchor;

  const navigate = (target) => {
    const { path, anchor } = parseLocation(target);
    const hashString = anchor ? `${path}#${anchor}` : path;
    window.location.hash = hashString;
    setLocationState({ path, anchor });

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseLocation(window.location.hash || window.location.pathname);
      setLocationState(parsed);
      if (parsed.anchor) {
        setTimeout(() => {
          const el = document.getElementById(parsed.anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle initial anchor on page load
  useEffect(() => {
    if (locationState.anchor) {
      setTimeout(() => {
        const el = document.getElementById(locationState.anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, currentAnchor, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

