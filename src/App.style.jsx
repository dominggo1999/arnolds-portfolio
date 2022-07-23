import tw, { styled } from 'twin.macro';
import isMobile from '~/util/isMobile.js';

export const AppWrapper = styled.div`
  ${tw`
    w-full 
    min-h-screen  
    relative 
    z-50
    text-dark-primary
    dark:text-light-primary 
    bg-primary
    dark:bg-primary-dark
  `}

  ${!isMobile && tw`
    transition 
    transition-bg
    ease-out-sine
    duration-300
  `}
`;
