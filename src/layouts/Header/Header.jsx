import './_header.scss';
import { useContext } from 'react';
import Logo from '../../features/Logo/Logo';
import Navigation from '../../features/Navigation/Navigation';
import HamburgerMenu from '../../features/HamburgerMenu/HamburgerMenu';
import DarkMode from '../../features/DarkMode/DarkMode';
import NavigationContext from '../../context/NavigationContext';
import ThemeContext from '../../context/ThemeContext';

const Header = () => {
  const { nav } = useContext(NavigationContext);
  const { darkMode } = useContext(ThemeContext);

  const handleClasses = () => {
    if (nav && darkMode) {
      return 'header-navActive';
    } else if (nav && !darkMode) {
      return 'header-navActive lightTheme-header';
    } else if (!nav && darkMode) {
      return '';
    } else if (!nav && !darkMode) {
      return 'lightTheme-header';
    }
  };

  return (
    <header
      className={
        handleClasses()
      }
    >
      <Logo />
      <Navigation />
      <DarkMode />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
