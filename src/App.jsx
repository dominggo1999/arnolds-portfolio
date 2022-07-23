import React from 'react';
import { Routes as ReactRouter, Route } from 'react-router-dom';
import useThemeStore from '~/stores/useThemeStore.jsx';
import useColorSchemeStore from '~/stores/useColorSchemeStore.jsx';
import { AppWrapper } from './App.style.jsx';

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);

  return (
    <div className={`${theme} ${colorScheme}`}>
      <AppWrapper>
        <ReactRouter>
          <Route
            path="/"
            element={<p>Home</p>}
          />

          <Route
            path="thank-you"
            element={<p>Thank you</p>}
          />

          <Route
            path="*"
            element={<p>Not Found</p>}
          />
        </ReactRouter>
      </AppWrapper>

    </div>
  );
};

export default App;
