import React from 'react';
import { fadeInUp } from '~/animations/single.js';
import useAnimate from '~/hooks/useAnimate.jsx';
import { SectionTitle, SectionSubtitle, Accent } from '~/common/Typography.jsx';
import {
  SkillsWrapper,
  SkillsHeader,
  SkillsItems,
  Item as StyledItem,
  ItemName,
} from './Skills.style.jsx';
import { ReactComponent as ReactLogo } from '../../icons/react.svg';
import { ReactComponent as ChromeLogo } from '../../icons/chrome.svg';
import { ReactComponent as ElectronLogo } from '../../icons/electron.svg';
import { ReactComponent as GitLogo } from '../../icons/git.svg';
import { ReactComponent as NodeLogo } from '../../icons/node.svg';
import { ReactComponent as StyledComponenstLogo } from '../../icons/styled-components.svg';
import { ReactComponent as TailwindLogo } from '../../icons/tailwind.svg';
import { ReactComponent as ViteLogo } from '../../icons/vite.svg';
import { ReactComponent as CssLogo } from '../../icons/css.svg';
import { ReactComponent as HTMLLogo } from '../../icons/html.svg';
import { ReactComponent as JavascriptLogo } from '../../icons/javascript.svg';
import { ReactComponent as GithubLogo } from '../../icons/github.svg';

const items = [
  {
    text: 'HTML',
    logo: HTMLLogo,
    link: 'https://en.wikipedia.org/wiki/HTML5',
  },
  {
    text: 'CSS',
    logo: CssLogo,
    link: 'https://en.wikipedia.org/wiki/CSS',
  },
  {
    text: 'Javascript',
    logo: JavascriptLogo,
    link: 'https://www.javascript.com/',
  },
  {
    text: 'React',
    logo: ReactLogo,
    link: 'https://reactjs.org/',
  },
  {
    text: 'Tailwind CSS',
    logo: TailwindLogo,
    link: 'https://tailwindcss.com/',
  },
  {
    text: 'Styled Components',
    logo: StyledComponenstLogo,
    link: 'https://styled-components.com/',
  },
  {
    text: 'Node',
    logo: NodeLogo,
    link: 'https://nodejs.org/',
  },
  {
    text: 'Electron',
    logo: ElectronLogo,
    link: 'https://www.electronjs.org/',
  },
  {
    text: 'Chrome Extension',
    logo: ChromeLogo,
    link: 'https://developer.chrome.com/docs/extensions/',
  },
  {
    text: 'Git',
    logo: GitLogo,
    link: 'https://git-scm.com/',
  },
  {
    text: 'Github',
    logo: GithubLogo,
    link: 'https://github.com/',
    monochrome: true,
  },
  {
    text: 'Vite',
    logo: ViteLogo,
    link: 'https://vitejs.dev/',
  },
];

const Item = ({
  logo: Logo, link, text, monochrome = false,
}) => {
  return (
    <StyledItem
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={monochrome ? 'monochrome' : null}
    >
      <Logo />
      <ItemName>{text}</ItemName>
    </StyledItem>
  );
};

const Skills = () => {
  const [skillsRef, skillsAnimationControls] = useAnimate({ threshold: 0.4 });

  return (
    <SkillsWrapper
      ref={skillsRef}
      variants={fadeInUp}
      initial="hidden"
      animate={skillsAnimationControls}
    >
      <SkillsHeader>
        <SectionTitle>
          Skills
        </SectionTitle>
        <SectionSubtitle>
          These are a few of the <Accent> tools and technologies </Accent> I&apos;ve used in projects and am most familiar with.
        </SectionSubtitle>
      </SkillsHeader>
      <SkillsItems>
        {
          items.map((i) => {
            return (
              <Item
                key={i.link}
                {...i}
              />
            );
          })
        }
      </SkillsItems>
    </SkillsWrapper>
  );
};

export default Skills;
