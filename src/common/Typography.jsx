import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import useAnimate from '~/hooks/useAnimate.jsx';
import { fadeInUp } from '~/animations/single.js';

export const StyledSectionHeader = styled(motion.div)`
  ${tw`
    flex 
    flex-col
  `}
`;

export const SectionHeader = ({ children }) => {
  const [SectionHeaderWrapper, sectionHeaderAnimationControls] = useAnimate({ threshold: 0.3 });

  return (
    <StyledSectionHeader
      variants={fadeInUp}
      ref={SectionHeaderWrapper}
      initial="hidden"
      animate={sectionHeaderAnimationControls}
    >
      {children}
    </StyledSectionHeader>
  );
};

export const SectionTitle = styled.h1`
  ${tw`
    text-accent
    text-2xl
    sm:text-3xl
    lg:text-4xl
    xl:text-5xl 
    font-bold 
    mb-2
  `}
`;

export const SectionSubtitle = styled.p`
  ${tw`
    dark:text-light-primary
    sm:text-xl
    font-semibold
  `}
`;

export const Accent = styled.span`
  ${tw`
    text-accent 
    font-medium
    font-semibold 
  `}
`;
