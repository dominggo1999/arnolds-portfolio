import React from 'react';
import { MdDarkMode as DarkIcon, MdPalette as PaletteIcon } from 'react-icons/md/index.js';
import { BsSun as LightIcon } from 'react-icons/bs/index.js';
import { AiFillGithub as GithubIcon, AiFillLinkedin as LinkedinLogo, AiOutlineMail as EmailIcon } from 'react-icons/ai/index.js';
import isMobile from '~/util/isMobile.js';
import useThemeStore from '~/stores/useThemeStore.jsx';
import { HeaderIcon } from '~/common/Icon.jsx';
import useColorSchemeStore from '~/stores/useColorSchemeStore.jsx';
import ColorSchemePicker from '~/common/ColorSchemePicker/ColorSchemePicker.jsx';
import { headerAnimation } from '~/animations/stagger.js';
import { slideUp } from '~/animations/single.js';
import useStickyNavbar from '~/hooks/useStickyNavbar.jsx';
import useAnimate from '~/hooks/useAnimate.jsx';
import useScrollToTarget from '~/hooks/useScrollToTarget.jsx';
import {
  Brand,
  Navigation,
  HeaderWrapper,
  BlurBackground,
} from './Header.style.jsx';

const changeTheme = useThemeStore.getState().changeTheme;

const Header = () => {
  const sticky = useStickyNavbar();
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === 'dark';
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);
  const getActiveColors = useColorSchemeStore((state) => state.getActiveColors);
  const [headerRef, headerAnimationControls] = useAnimate();
  const scrollToTarget = useScrollToTarget();

  return (
    <>
      <BlurBackground
        isDark={isDark}
        theme={theme}
        colors={getActiveColors()}
        className={sticky ? 'sticky' : null}
      />
      <HeaderWrapper
        className={sticky ? 'sticky' : null}
        initial={isMobile ? 'show' : 'hidden'}
        ref={headerRef}
        variants={headerAnimation}
        animate={headerAnimationControls}
      >
        <Brand
          variants={slideUp}
          to="/"
        >
          AD
        </Brand>
        <Navigation>
          <HeaderIcon
            variants={slideUp}
            onClick={() => scrollToTarget('#contact')}
          >
            <EmailIcon />
          </HeaderIcon>
          <HeaderIcon variants={slideUp}><LinkedinLogo /></HeaderIcon>
          <HeaderIcon variants={slideUp}><GithubIcon /></HeaderIcon>

          <ColorSchemePicker
            variants={slideUp}
            icon={PaletteIcon}
          />

          <HeaderIcon
            variants={slideUp}
            onClick={changeTheme}
          >
            {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
          </HeaderIcon>
        </Navigation>
      </HeaderWrapper>
    </>
  );
};

export default Header;
