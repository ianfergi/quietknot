import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BackgroundChanger() {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    // Reset the background-image for every route change
    if (pathname === '/xxxxx') {
      document.body.style.backgroundImage = 'url("/images/stripes1.png")';
    } else {
      document.body.style.backgroundImage = 'url("images/y2k2.png")'; // default background if needed
    }

    return () => {
      // Optional: Clean up the background image if needed on unmount
      document.body.style.backgroundImage = '';
    };
  }, [location]);

  return null;
}

export default BackgroundChanger;