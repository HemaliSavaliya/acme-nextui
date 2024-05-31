import React, { useEffect, useRef } from 'react';

export const toPixels = (n) => `${Math.floor(n)}px`;

export default function SimpleParallax({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      const height = ref.current.clientHeight;

      const handleScroll = () => {
        if (ref.current) {
          const calculatedTop = top + height * 0.3;
          let bottom = calculatedTop - window.scrollY;

          if (window.scrollY > calculatedTop && window.scrollY < calculatedTop + height) {
            ref.current.style.bottom = toPixels(bottom);
          } else if (window.scrollY < calculatedTop) {
            ref.current.style.bottom = '0';
          }
        }
      };

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

      return () => {
        // Remove scroll event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div
      className="simple-parallax"
      ref={ref}
      style={{ transition: 'bottom 1.5s ease-in', scrollBehavior: "smooth" }}
    >
      {children}
    </div>
  );
}