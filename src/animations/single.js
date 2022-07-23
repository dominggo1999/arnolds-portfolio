import { outSine } from './ease.js';

export const slideUp = {
  hidden: {
    opacity: 0,
    y: '20%',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: outSine,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: outSine,
      delay: 0.8,
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: '15px',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      opacity: {
        duration: 0.4,
      },
      y: {
        duration: 0.5,
      },
    },
  },
};
