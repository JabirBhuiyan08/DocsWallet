import { useEffect, useState } from 'react';
import logo from '@/assets/logo-2.png';


const LogoAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the logo after 3 seconds (same as animation duration)
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="logo-animation">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default LogoAnimation;
