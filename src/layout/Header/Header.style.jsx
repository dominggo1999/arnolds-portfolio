import tw, { styled, theme } from 'twin.macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import isMobile from '~/util/isMobile.js';

export const HeaderWrapper = styled(motion.header)`
  ${tw`
    mx-auto 
    max-w-wrapper 
    px-5
    flex 
    justify-between 
    items-center
    fixed 
    w-full
    -translate-x-1/2 
    left-1/2    
    z-[100]
    h-[5rem]
    top-0
    -translate-y-full
  `}

  transition : transform ease 300ms;

  &.sticky{
    ${tw`
      translate-y-0
    `}
  }
`;

export const BlurBackground = styled.div`
  ${tw`
    fixed 
    w-full
    -translate-x-1/2 
    left-1/2    
    z-[90]
    h-[5rem]
    top-0
    -translate-y-full
  `}

  transition: ${!isMobile
    ? `background-color ${theme`transitionTimingFunction.out-sine`} 300ms, transform ease 300ms`
    : 'transform ease 300ms'};

  background-color:${({ colors, isDark }) => (
    isDark
      ? `rgba(${colors.primaryDark},0.85)`
      : `rgba(${colors.primary},0.97)`)};
  backdrop-filter:${({ isDark }) => (isDark ? 'blur(10px)' : 'blur(5px)')}  ;

  &.sticky{
    ${tw`
      translate-y-0
    `}
  }
`;

export const Brand = motion(styled(Link)`
  ${tw`
    font-extrabold 
    text-accent 
    w-10
    h-10 
    xs:text-xl 
    xs:w-12
    xs:h-12 
    flex 
    items-center 
    justify-center 
    rounded-full
    border
    border-accent
  `}
`);

export const Navigation = styled.nav`
  ${tw`
    flex 
    items-center 
    gap-x-1
    sm:gap-x-3
  `}
`;
