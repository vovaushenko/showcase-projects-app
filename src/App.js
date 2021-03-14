import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { useDarkMode } from './hooks/useDarkTheme';
import { darkTheme, lightTheme } from './Themes';

function App() {
  // @desc: Dark Mode
  const [theme, themeToggler] = useDarkMode('');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  /////////////////////////////////////////////////////////////
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <h1>Hello world</h1>
        <h2>Hello world</h2>
        <button onClick={themeToggler}>click</button>
      </ThemeProvider>
    </>
  );
}

export default App;
