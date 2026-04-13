
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard scroll reset
    window.scrollTo(0, 0);
    
    // Fallback for complex layouts or SmoothScroll integration
    if ((window as any).scrollToTop) {
      (window as any).scrollToTop();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
