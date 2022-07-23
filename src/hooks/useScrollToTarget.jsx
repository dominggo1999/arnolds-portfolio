import React from 'react';
import { scroller } from 'react-scroll';

const remToPixel = (rem) => parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);

const useScrollToTarget = () => {
  const scrollToTarget = (href, offset = 2, duration = 2500) => {
    scroller.scrollTo(href.replace('#', ''), {
      duration,
      smooth: 'easeInOutQuint',
      offset: -remToPixel(offset),
      ignoreCancelEvents: true,
    });
  };

  return scrollToTarget;
};

export default useScrollToTarget;
