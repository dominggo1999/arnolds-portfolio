/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme.js');

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }

    return `rgb(var(${variableName}))`;
  };
};

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    screens: {
      xs: '500px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
        captcha: ['Source Code Pro', 'monospace'],
      },
      colors: {
        primary: withOpacity('--primary'),
        'primary-dark': withOpacity('--primary-dark'),
        accent: withOpacity('--accent'),
        'accent-hover': withOpacity('--accent-hover'),
        'accent-transparent': withOpacity('--accent-transparent'),
      },
      maxWidth: {
        wrapper: '78rem',
      },
      textColor: {
        light: {
          primary: withOpacity('--text-light-primary'),
          secondary: withOpacity('--text-light-secondary'),
        },
        dark: {
          primary: withOpacity('--text-dark-primary'),
          secondary: withOpacity('--text-dark-secondary'),
        },
      },
      transitionProperty: {
        bg: 'background-color',
      },
      transitionTimingFunction: {
        'out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
      },
    },
  },
};
