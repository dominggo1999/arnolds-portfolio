import React from 'react';
import tw, { styled } from 'twin.macro';
import { HiOutlineExternalLink as ExternalIcon } from 'react-icons/hi/index.js';
import { AiFillGithub as GithubIcon } from 'react-icons/ai/index.js';
import { checkWebPSupport } from 'supports-webp-sync';
import { motion } from 'framer-motion';
import { fadeInUp } from '~/animations/single.js';
import isMobile from '~/util/isMobile.js';
import useAnimate from '~/hooks/useAnimate.jsx';

export const StyledPortfolioItemWrapper = styled(motion.div)`
  ${tw`
    grid 
    md:grid-cols-2 
    lg:gap-x-16
    gap-x-10
    gap-y-5
    sm:gap-y-6
    py-11
    sm:py-16
  `}
`;

export const PortfolioItemWrapper = ({ children }) => {
  const [portfolioItemRef, portfolioItemAnimationControls] = useAnimate({ threshold: isMobile ? 0.15 : 0.3 });

  return (
    <StyledPortfolioItemWrapper
      variants={fadeInUp}
      ref={portfolioItemRef}
      initial="hidden"
      animate={portfolioItemAnimationControls}
    >
      {children}
    </StyledPortfolioItemWrapper>
  );
};

export const Explanation = styled.div`
  ${tw`
    flex 
    flex-col
    order-2
    md:order-1
  `}
`;

// Explanation
export const Title = styled.h3`
  ${tw`
    text-xl
    sm:text-3xl
    font-extrabold
    text-accent 
    mb-3
  `}
`;

export const Description = styled.div`
  ${tw`
    font-medium 
    md:text-lg 
    text-dark-secondary
    dark:text-light-secondary
    mb-3
  `}
`;

export const StyledList = styled.div`
  ${tw`
    mb-3
  `}
`;

export const ListTitle = styled.p`
  ${tw`
    md:text-lg 
    font-bold 
    text-accent
  `}
`;

export const ListItems = styled.ul`
  ${tw`
    flex 
    flex-wrap
    gap-y-1
    gap-x-2
    font-medium
    text-dark-secondary
    dark:text-light-secondary
  `}
`;

export const StyledListItem = styled.li`
  ${tw`
    text-sm
    md:text-base 
  `}

  &:nth-last-of-type(1) .comma{
    ${tw`
      hidden
    `}
  }
`;

export const ListItem = ({ children }) => {
  return (
    <StyledListItem>
      {children} <span className="comma">,</span>
    </StyledListItem>
  );
};

export const List = ({ title, children }) => {
  return (
    <StyledList>
      <ListTitle>
        {title}
      </ListTitle>
      {children}
    </StyledList>
  );
};

export const Categories = ({ children }) => <List title="Categories">{children}</List>;
export const Technologies = ({ children }) => <List title="Technologies">{children}</List>;
export const APIs = ({ children }) => <List title="APIs">{children}</List>;

export const StyledLinks = styled.div`
  ${tw`
    flex 
    flex-wrap 
    gap-y-2
    gap-x-5
    mt-5 
  `}
`;

export const Link = styled.a`
  ${tw`
    bg-accent
    hover:bg-accent-hover
    text-light-primary
    dark:text-primary-dark
    px-3
    py-2
    font-bold
    rounded
    flex
    items-center
    gap-x-3
    text-sm
    md:text-base
  `}
`;

export const Links = ({ repo, live }) => {
  return (
    <StyledLinks>
      <Link
        target="_blank"
        rel="noopener noreferer"
        href={repo}
      >
        Repository
        <GithubIcon />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferer"
        href={live}
      >
        See Live
        <ExternalIcon />
      </Link>
    </StyledLinks>
  );
};

const scWidth = `${(1920 / 1974) * 100}%`;
const scTop = `${(27 / 1751) * 100}%`;
const scLeft = `${(27 / 1974) * 100}%`;

export const StyledThumbnail = styled.div`
  ${tw`
    overflow-hidden 
    rounded-lg
    self-start 
    order-1 
    md:order-2 
    relative
  `}

  img{
    ${tw`
      max-w-full 
      max-h-full 
      w-full 
    `}
  }

  img.screenshot{
    ${tw`
      absolute 
      z-[70]
    `}

    width :${scWidth} ;
    top : ${scTop};
    left : ${scLeft};
  }

  img.frame.light{
    ${tw`
      absolute
      top-0 
      left-0 
      z-[60]
      hidden 
      dark:block
    `}
  }

  .background{
    ${tw`
      w-full 
      z-10
      absolute 
      top-0
      bg-[#1B1B1B]
      dark:bg-white
    `}

    aspect-ratio: 1366 / 855; //screen shot dimensions
  }
`;

const ext = checkWebPSupport() ? 'webp' : 'png';
export const Thumbnail = ({ src, alt, ...rest }) => {
  const imagesFolder = `/images/portfolio/${ext}`;
  const imageSource = `${imagesFolder}/${src}.${ext}`;

  return (
    <StyledThumbnail>
      <img
        className="screenshot"
        src={imageSource}
        alt={alt}
        {...rest}
        width={1366}
        height={855}
      />
      <img
        className="frame dark"
        src={`/images/portfolio/frames/dark.${ext}`}
        alt="Frame"
        width={1974}
        height={1751}
      />
      <img
        className="frame light"
        src={`/images/portfolio/frames/light.${ext}`}
        alt="Frame"
        width={1974}
        height={1751}
      />
      {/* Prevent thin line on the background */}
      <div className="background" />
    </StyledThumbnail>
  );
};
