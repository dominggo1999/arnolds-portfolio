import React, { useEffect } from 'react';

const useCloseOnScroll = (close) => {
  useEffect(() => {
    window.addEventListener('scroll', close);

    return () => {
      window.removeEventListener('scroll', close);
    };
  }, []);
};

export default useCloseOnScroll;
