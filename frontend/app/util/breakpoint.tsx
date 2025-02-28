import { useState, useEffect } from 'react';

export default function useBreakpoint() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => setIsMobile(window.innerWidth < 768);

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return isMobile;
}