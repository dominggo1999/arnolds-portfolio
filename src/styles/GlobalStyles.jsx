import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import useThemeStore from '~/stores/useThemeStore.jsx';
import useColorSchemeStore from '~/stores/useColorSchemeStore.jsx';
import isMobile from '~/util/isMobile.js';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased
      overflow-x-hidden 
      font-primary
    `}

    ${!isMobile && tw`
      transition 
      transition-bg
      ease-out-sine
      duration-300
    `}

    background: ${({ colors, isDark }) => (isDark ? colors.primaryDarkHex : colors.primaryHex)};
  }

  /* Captcha capsule */
  #capsule{
    ${tw`
      z-[-1]
      fixed 
      top-0 
      left-0
      -left-12 
      font-captcha
    `}
    p{
      ${tw`
        w-8 
        h-8
        flex 
        items-center 
        justify-center 
        font-bold 
        text-black
      `}
    }
  }

  /* Scrollbar */
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ colors, isDark }) => (isDark ? colors.primaryDarkHex : colors.primaryHex)};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    ${tw`rounded-full`}
    background: ${({ colors }) => colors.accentHex};
  }

  /* Need another color for accent hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ colors }) => colors.accentHex};
  }

  /* Firefox */
  :root{
    scrollbar-color: ${({ colors, isDark }) => (
    isDark
      ? `${colors.accentHex} ${colors.primaryDarkHex}`
      : `${colors.accentHex} ${colors.primaryHex}`)};
    scrollbar-width: thin;
  }
`;

const GlobalStyles = () => {
  const isDark = useThemeStore((state) => state.theme);
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);
  const getActiveColors = useColorSchemeStore((state) => state.getActiveColors);

  return (
    <>
      <BaseStyles />
      <CustomStyles
        colors={getActiveColors(colorScheme)}
        isDark={isDark === 'dark' || null}
      />
    </>
  );
};

export default GlobalStyles;
