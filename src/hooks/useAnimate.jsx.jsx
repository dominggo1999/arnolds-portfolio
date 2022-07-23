import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useAnimate = (options = {}) => {
  const containerControls = useAnimation();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
    ...options,
  });

  useEffect(() => {
    if (inView) {
      containerControls.start('show');
    }
  }, [inView]);

  return [ref, containerControls];
};

export default useAnimate;
