import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

export const HeaderIcon = styled(motion.button)`
  ${tw`
    w-9
    h-9
    md:w-12 
    md:h-12
    flex 
    items-center 
    justify-center  
    rounded-lg 
    text-accent 
    text-xl  
    hover:(bg-accent bg-opacity-30)
  `}

  &.active{
    ${tw`
      bg-accent 
      bg-opacity-30
    `}
  }
`;
