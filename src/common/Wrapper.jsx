import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.div)`
  ${tw`
    w-full
    mx-auto 
    max-w-wrapper 
    px-5
  `}
`;
