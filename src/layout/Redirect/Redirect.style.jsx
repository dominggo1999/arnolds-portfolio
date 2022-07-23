import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrapper } from '~/common/Wrapper.jsx';

export const RedirectWrapper = motion(styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    items-center 
    justify-center
    text-center
  `}

  /* Add scroll bar to make layout consistent with home page*/
  height: calc(100vh + 1rem); 
`);

export const Icon = styled(motion.span)`
  ${tw`
    text-accent 
    text-5xl
    mb-2
  `}
`;

export const Title = styled(motion.h1)`
  ${tw`
    text-2xl
    xs:text-3xl 
    lg:text-4xl 
    font-bold 
    dark:text-accent 
    flex
  `}
`;

export const Subtitle = styled(motion.h2)`
  ${tw`
    mt-2 
    md:text-lg
  `}
`;

export const Button = motion(styled(Link)`
  ${tw`
    mt-6
    bg-accent
    hover:bg-accent-hover
    text-light-primary
    dark:text-primary-dark
    px-3 
    py-2
    md:px-4
    md:py-2
    font-bold  
    md:text-lg  
    rounded-md 
    flex 
    items-center
  `}

  svg{
    ${tw`
      mr-2
    `}
  }
`);
