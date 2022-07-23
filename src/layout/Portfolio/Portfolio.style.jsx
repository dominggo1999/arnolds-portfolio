import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper.jsx';
import { SectionHeader } from '~/common/Typography.jsx';

export const PortfolioWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    sm:pb-20
  `}
`;

export const Header = styled(SectionHeader)`
  ${tw`
    mb-3
    sm:mb-5
  `}
`;
