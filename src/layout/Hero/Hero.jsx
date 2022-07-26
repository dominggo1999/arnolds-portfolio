import React from 'react';
import isMobile from '~/util/isMobile.js';
import ScrambleText from '~/layout/ScrambleText/ScrambleText.jsx';
import { heroTextAnimation } from '~/animations/stagger.js';
import useAnimate from '~/hooks/useAnimate.jsx';
import { slideUp } from '~/animations/single.js';
import useScrollToTarget from '~/hooks/useScrollToTarget.jsx';
import {
  HeroWrapper,
  HeroTextContent,
  SubTitle,
  Title,
  Description,
  Buttons,
  Button,
} from './Hero.style.jsx';

const Hero = () => {
  const [heroTextRef, heroTextAnimationControls] = useAnimate({ threshold: 0.1 });
  const scrollToTarget = useScrollToTarget();

  return (
    <HeroWrapper>
      <HeroTextContent
        ref={heroTextRef}
        variants={heroTextAnimation}
        animate={heroTextAnimationControls}
        initial={isMobile ? 'show' : 'hidden'}
      >
        <SubTitle variants={slideUp}>
          Hello There,
        </SubTitle>
        <Title variants={slideUp}>
          I am <span>Arnold Dominggo</span>,<br />
          a <span>Frontend Engineer</span>
        </Title>
        <Description variants={slideUp}>
          I love coding and enjoy building things.
        </Description>
        <Buttons variants={slideUp}>
          <Button onClick={() => scrollToTarget('#portfolio')}>
            Portfolio
          </Button>
          <Button onClick={() => scrollToTarget('#contact', 0)}>
            Contact
          </Button>
        </Buttons>
      </HeroTextContent>
      <ScrambleText />
    </HeroWrapper>
  );
};

export default Hero;
