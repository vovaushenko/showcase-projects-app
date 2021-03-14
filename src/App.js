import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkTheme';
import { GlobalStyles } from './GlobalStyles';
import { darkTheme, lightTheme } from './Themes';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';

function App() {
  // @desc: Dark Mode
  const [theme, themeToggler] = useDarkMode('');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Navbar themeToggler={themeToggler} />
        <ProjectList />
      </ThemeProvider>
    </>
  );
}

export default App;
