import React from 'react';
import { fadeInUp } from '~/animations/single.js';
import useAnimate from '~/hooks/useAnimate.jsx';
import { SectionTitle, SectionSubtitle, Accent } from '~/common/Typography.jsx';
import {
  SkillsWrapper,
  SkillsHeader,
  SkillsItems,
  Item,
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
        <Item>
          <HTMLLogo />
          <ItemName>HTML</ItemName>
        </Item>
        <Item>
          <CssLogo />
          <ItemName>CSS</ItemName>
        </Item>
        <Item>
          <JavascriptLogo />
          <ItemName>Javascript</ItemName>
        </Item>
        <Item>
          <ReactLogo />
          <ItemName>React</ItemName>
        </Item>
        <Item>
          <TailwindLogo />
          <ItemName>Tailwind CSS</ItemName>
        </Item>
        <Item>
          <StyledComponenstLogo />
          <ItemName>Styled Components</ItemName>
        </Item>
        <Item>
          <NodeLogo />
          <ItemName>Node</ItemName>
        </Item>
        <Item>
          <ElectronLogo />
          <ItemName>Electron</ItemName>
        </Item>
        <Item>
          <ChromeLogo />
          <ItemName>Chrome Extension</ItemName>
        </Item>
        <Item>
          <GitLogo />
          <ItemName>Git</ItemName>
        </Item>
        <Item className="monochrome">
          <GithubLogo />
          <ItemName>Github</ItemName>
        </Item>
        <Item>
          <ViteLogo />
          <ItemName>Vite</ItemName>
        </Item>
      </SkillsItems>
    </SkillsWrapper>
  );
};

export default Skills;
