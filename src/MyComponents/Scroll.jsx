import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Scroll = () => {
    const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default Scroll