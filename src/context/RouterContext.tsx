import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouteMatch {
  route: string;
  params: Record<string, string>;
}

interface RouterContextType {
  path: string;
  navigate: (to: string, replace?: boolean) => void;
  params: Record<string, string>;
  activeSection: string;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
  params: {},
  activeSection: 'home'
});

export const useRouter = () => useContext(RouterContext);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: ReactNode;
  replace?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  className = '',
  children,
  replace = false,
  onClick,
  ...rest
}) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // Allow browser default for external links, modified clicks (Cmd/Ctrl/Shift), or right clicks
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    e.preventDefault();
    navigate(href, replace);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Normalize initial path: extract pathname, handle hash if used as fallback
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    // If hash routing is used e.g. #/guides/why-bark, migrate it
    if (window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    return window.location.pathname || '/';
  };

  const [path, setPath] = useState<string>(getInitialPath);

  const navigate = (to: string, replace = false) => {
    if (typeof window === 'undefined') return;

    // Handle hash anchors on the same page
    if (to.startsWith('#')) {
      const el = document.getElementById(to.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const cleanPath = to.split('#')[0] || '/';
    const hash = to.includes('#') ? to.slice(to.indexOf('#')) : '';

    if (replace) {
      window.history.replaceState({}, '', cleanPath + hash);
    } else {
      window.history.pushState({}, '', cleanPath + hash);
    }

    setPath(cleanPath);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Compute params from path
  const getRouteInfo = (currentPath: string) => {
    const parts = currentPath.split('/').filter(Boolean);
    const params: Record<string, string> = {};
    let activeSection = 'home';

    if (parts.length === 0) {
      activeSection = 'home';
    } else {
      activeSection = parts[0];
      if (parts.length > 1) {
        params.id = parts[1];
      }
    }

    return { params, activeSection };
  };

  const { params, activeSection } = getRouteInfo(path);

  return (
    <RouterContext.Provider value={{ path, navigate, params, activeSection }}>
      {children}
    </RouterContext.Provider>
  );
};
