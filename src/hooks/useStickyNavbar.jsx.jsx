import React, {
  useState, useRef, useLayoutEffect,
} from 'react';

const useStickyNavbar = () => {
  const [sticky, setSticky] = useState(true);
  const prevScroll = useRef(null);

  useLayoutEffect(() => {
    prevScroll.current = window.pageYOffset;

    const toggleNavbar = () => {
      const currentScroll = window.pageYOffset;

      // Scroll up
      if (currentScroll <= prevScroll.current) {
        setSticky(true);
      } else {
        // Scroll down
        setSticky(false);
      }

      // Save scroll position to compare with the next scroll event
      prevScroll.current = currentScroll;
    };

    window.addEventListener('scroll', toggleNavbar);

    return () => {
      window.removeEventListener('scroll', toggleNavbar);
    };
  }, []);

  return sticky;
};

export default useStickyNavbar;
