import React from 'react';
import { HiArrowLeft as BackIcon } from 'react-icons/hi/index.js';
import useAnimate from '~/hooks/useAnimate.jsx';
import { slideUp } from '~/animations/single.js';
import isMobile from '~/util/isMobile.js';
import { redirectAnimation } from '~/animations/stagger.js';
import {
  RedirectWrapper,
  Icon,
  Title,
  Subtitle,
  Button,
} from './Redirect.style.jsx';

const Redirect = ({
  icon, title, subtitle,
}) => {
  const [redirectRef, redirectAnimationControls] = useAnimate({ threshold: 0.1 });

  return (
    <RedirectWrapper
      ref={redirectRef}
      variants={redirectAnimation}
      animate={redirectAnimationControls}
      initial={isMobile ? 'show' : 'hidden'}
    >
      <Icon variants={slideUp}>
        {icon()}
      </Icon>
      <Title variants={slideUp}>{title}</Title>
      <Subtitle variants={slideUp}>
        {subtitle}
      </Subtitle>
      <Button
        variants={slideUp}
        to="/"
      >
        <BackIcon />
        Back to portfolio
      </Button>
    </RedirectWrapper>
  );
};

export default Redirect;
