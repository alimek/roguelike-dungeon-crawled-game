import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { Game } from './containers';
import store from './store';
import theme from './theme';

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  </Provider>
);
