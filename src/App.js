import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router';
import { useSelector } from 'react-redux';
import ThemeProvider from './providers/theme-provider';
import GlobalStyles from './components/common/global-styles';

const App = () => {
  const { token } = useSelector((state) => state.authReducer);
  return (
    <ThemeProvider>
      <GlobalStyles />
      {useRoutes(routes(Boolean(token)))}
    </ThemeProvider>
  );
};

export default App;
