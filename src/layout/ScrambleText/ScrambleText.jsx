import React, { useMemo, useRef, useEffect } from 'react';
import short from 'short-uuid';
import useAnimate from '~/hooks/useAnimate.jsx';
import isMobile from '~/util/isMobile.js';
import { fadeIn } from '~/animations/single.js';
import { randomFromArray } from '~/util/array.js';
import { ScrambleTextWrapper } from './ScrambleText.style.jsx';

const ROW = 10;
const COLUMN = 10;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const rotation = [0, 90, 180, 270];

const cells = Array
  .from(Array(ROW * COLUMN).keys())
  .map((i) => randomFromArray(ALPHABET));

const Cell = ({ char, col, row }) => {
  const interval = useRef();
  const charRef = useRef();
  const animatingCells = useRef();

  const getAnimatingCells = () => {
    const wrapper = document.querySelector('#scribble');
    return wrapper.querySelectorAll(`span[data-col="${col}"], span[data-row="${row}"]`);
  };

  const animate = () => {
    animatingCells.current.forEach((i) => {
      i.style.opacity = 1;
      i.innerHTML = randomFromArray(ALPHABET);
      i.style.transform = `rotate(${randomFromArray(rotation)}deg)`;
      i.classList.add('animate');
    });
  };

  const handleHover = () => {
    animatingCells.current = Array.from(getAnimatingCells());

    animate();

    if (!isMobile) {
      interval.current = setInterval(() => animate(), 100);
    }
  };

  const handleMouseLeave = () => {
    interval.current && clearInterval(interval.current);
    animatingCells.current.forEach((i) => {
      i.style.opacity = Math.random();
      i.classList.remove('animate');
    });
  };

  useEffect(() => {
    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, []);

  return (
    <span
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '10%',
      }}
    >
      <span
        data-col={col}
        data-row={row}
        ref={charRef}
        style={{
          transform: `rotate(${randomFromArray(rotation)}deg)`,
          opacity: Math.random(),
        }}
      >
        {char}
      </span>
    </span>
  );
};

const ScrambleText = () => {
  const [scribbleRef, scribbleAnimationControls] = useAnimate({ threshold: 0.1 });

  return useMemo(() => (
    <ScrambleTextWrapper
      variants={fadeIn}
      ref={scribbleRef}
      animate={scribbleAnimationControls}
      initial={isMobile ? 'show' : 'hidden'}
      id="scribble"
    >
      {
        cells.map((char, id) => {
          return (
            <Cell
              col={(id % COLUMN) + 1}
              row={id < 10 ? 1 : parseInt(id.toString().split('')[0], 10) + 1}
              char={char}
              key={short.generate()}
            />
          );
        })
      }
    </ScrambleTextWrapper>
  ), []);
};

export default ScrambleText;
