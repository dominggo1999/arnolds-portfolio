import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const ScrambleTextWrapper = styled(motion.div)`
  ${tw`
    w-full
    lg:w-1/3
    flex
    flex-wrap
    max-w-[20rem]
    md:max-w-[24rem]
    lg:max-w-[25rem] 
    mx-auto
  `}

  & > span{
    ${tw`
      flex
      items-center 
      justify-center 
      font-extrabold 
      select-none
      uppercase
      md:text-xl
    `}

    aspect-ratio: 1/1;
  }

  & > span > span{
    ${tw`
      inline-block 
      text-accent 
    `}
  }

  & > span > span.animate{
    ${tw`
      text-dark-primary
      dark:text-light-primary
    `}
  }
`;
