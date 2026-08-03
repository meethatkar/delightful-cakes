import { useState, useEffect } from 'react';
import { getDeviceType, isMobile, isTablet, isDesktop } from '../utils/device';

export const useDevice = () => {
  const [device, setDevice] = useState({
    type: typeof window !== 'undefined' ? getDeviceType() : 'desktop',
    isMobile: typeof window !== 'undefined' ? isMobile() : false,
    isTablet: typeof window !== 'undefined' ? isTablet() : false,
    isDesktop: typeof window !== 'undefined' ? isDesktop() : true,
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setDevice({
        type: getDeviceType(),
        isMobile: isMobile(),
        isTablet: isTablet(),
        isDesktop: isDesktop(),
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    // Trigger once on mount to ensure correct initial state
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};

export default useDevice;
