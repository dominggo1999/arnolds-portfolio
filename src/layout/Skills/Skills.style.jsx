import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper.jsx';

export const SkillsWrapper = styled(Wrapper)`
  ${tw`
    grid
    lg:grid-cols-2
    gap-x-2
    pt-20
    lg:pt-5
    pb-20
  `}
`;

export const SkillsHeader = styled.div`
  ${tw`
    flex 
    flex-col
  `}
`;

export const SkillsItems = styled.div`
  ${tw`
    w-full
    grid 
    grid-cols-4
    justify-between
    gap-y-12
    xs:gap-y-16
    mt-12
    lg:mt-0
  `}
`;

export const Item = styled.a`
  ${tw`
    flex 
    flex-col
    items-center
    text-4xl
    xs:text-5xl
    xl:text-6xl 
    select-none
    cursor-pointer
  `}

  &.monochrome svg{
    ${tw`
      fill-current 
      dark:text-light-primary
      text-dark-primary
    `}
  }
`;

export const ItemName = styled.span`
  ${tw`
    text-sm
    mt-3
    font-semibold 
    text-center
  `}
`;
