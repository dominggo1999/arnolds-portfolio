import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles.jsx';
import './color-schemes/color-schemes.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
