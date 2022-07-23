import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

export const Picker = styled(motion.div)`
  ${tw`
    relative
  `}
`;

export const PickerContent = styled(motion.div)`
  ${tw`
    w-44 
    px-3
    py-4 
    rounded 
    bg-white 
    shadow-xl  
    absolute 
    top-full 
    right-0 
    text-dark-primary 
    mt-2
    select-none
  `}
`;

export const PickerText = styled.div`
  ${tw`
    text-sm 
    text-center 
    font-semibold  
    mb-3 
  `}
`;

export const List = styled.div`
  ${tw`
    grid 
    grid-cols-3 
    gap-4
    items-center
  `}
`;

export const Item = styled.button`
  ${tw`
    rounded-full 
    w-full 
    relative 
    overflow-hidden
    hover:(scale-[1.1] rotate-45)
  `}
  aspect-ratio : 1/1;
  transform : rotate(45deg);
  transition : transform ease-in-out 200ms;
`;

export const HalfColor = styled.div`
  ${tw`
    absolute 
    w-1/2 
    h-full 
    top-0
  `}
`;
