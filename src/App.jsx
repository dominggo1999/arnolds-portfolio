import React from 'react';
import { Routes as ReactRouter, Route } from 'react-router-dom';
import useThemeStore from '~/stores/useThemeStore.jsx';
import useColorSchemeStore from '~/stores/useColorSchemeStore.jsx';
import { AppWrapper } from './App.style.jsx';
import Header from './layout/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);

  return (
    <div className={`${theme} ${colorScheme}`}>
      <AppWrapper>
        <div id="capsule">
          <p className="number-1"></p>
          <p className="number-2"></p>
        </div>
        <Header />
        <ReactRouter>
          <Route
            path="/"
            element={<Home />}
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
