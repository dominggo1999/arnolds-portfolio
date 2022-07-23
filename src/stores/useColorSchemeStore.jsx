import create from 'zustand';
import produce from 'immer';
import colorSchemes from '~/color-schemes/color-schemes.json';

const DEFAULT_COLOR_SCHEME = 'navy';

let savedColorScheme = localStorage.getItem('color-scheme');

if (!savedColorScheme) {
  localStorage.setItem('color-scheme', DEFAULT_COLOR_SCHEME);
  savedColorScheme = DEFAULT_COLOR_SCHEME;
}

export const initialColorScheme = savedColorScheme;

const changeColorScheme = (set, newColorScheme) => {
  return set(produce((draft) => {
    draft.colorScheme = newColorScheme;
    localStorage.setItem('color-scheme', newColorScheme);
  }));
};

const useColorSchemeStore = create((set, get) => {
  return {
    colorScheme: initialColorScheme,
    changeColorScheme: (newColorScheme) => changeColorScheme(set, newColorScheme),
    getActiveColors: () => colorSchemes.filter((i) => i.name === get().colorScheme)[0].colors,
  };
});

export default useColorSchemeStore;
