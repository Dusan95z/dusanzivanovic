import './_header.scss';
import { useContext } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import DarkMode from '../DarkMode/DarkMode';
import NavigationContext from '../../context/NavigationContext';

const Header = () => {
  const {nav} = useContext(NavigationContext);

  return (
    <header className={nav ? 'header-navActive' : ''}>
      <Logo />
      <Navigation />
      <DarkMode/>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
