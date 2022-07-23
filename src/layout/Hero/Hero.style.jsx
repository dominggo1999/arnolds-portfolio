import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper.jsx';

export const HeroWrapper = styled(Wrapper)`
  ${tw`
    w-full
    flex  
    flex-wrap
    items-center
    gap-y-10
    pt-20
    pb-0
    lg:(pt-36 pb-36)
  `}
`;

export const HeroTextContent = styled(motion.div)`
  ${tw`
    w-full
    lg:w-2/3
    flex 
    flex-col  
    relative 
    z-10   
    text-center
    lg:text-left
    py-14
    lg:py-0
  `}
`;

export const SubTitle = styled(motion.p)`
  ${tw`
    text-base
    md:text-lg
    lg:text-xl 
    font-medium 
    mb-7
    font-bold 
  `}
`;

export const Title = styled(motion.h1)`
  ${tw`
    xl:text-[3.5rem]
    md:text-5xl
    sm:text-4xl
    xs:text-3xl
    text-2xl
    font-extrabold 
    uppercase
    leading-tight
  `}

  span{
    ${tw`
      text-accent 
    `}
  }
`;

export const Description = styled(motion.p)`
  ${tw`
    w-[85%]
    font-semibold
    md:w-[60%] 
    sm:text-xl
    mt-2
    md:mt-4
    dark:text-light-primary 
    mx-auto
    lg:mx-0
  `}
`;

export const Buttons = styled(motion.div)`
  ${tw`
    flex 
    mt-3
    gap-x-5 
    justify-center 
    lg:justify-start
  `}
`;

export const Button = styled.button`
  ${tw`
    mt-3
    bg-accent
    hover:bg-accent-hover
    text-light-primary
    dark:text-primary-dark
    px-3 
    py-2
    md:px-4
    md:py-3
    font-bold  
    md:text-lg  
    rounded-md
  `}
`;
