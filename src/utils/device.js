export const breakpoints = {
  mobile: 768,   // < 768px is mobile (Tailwind 'md')
  tablet: 1024,  // 768px - 1023px is tablet (Tailwind 'lg')
  desktop: 1280, // >= 1024px is desktop
};

export const isMobile = () => typeof window !== 'undefined' && window.innerWidth < breakpoints.mobile;
export const isTablet = () => typeof window !== 'undefined' && window.innerWidth >= breakpoints.mobile && window.innerWidth < breakpoints.tablet;
export const isDesktop = () => typeof window !== 'undefined' && window.innerWidth >= breakpoints.tablet;

export const getDeviceType = () => {
  if (typeof window === 'undefined') return 'desktop'; // Default for SSR
  if (window.innerWidth < breakpoints.mobile) return 'mobile';
  if (window.innerWidth < breakpoints.tablet) return 'tablet';
  return 'desktop';
};
