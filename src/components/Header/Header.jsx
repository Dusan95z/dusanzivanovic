import './_header.scss';
import { useContext } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import NavigationContext from '../../context/NavigationContext';

const Header = () => {
  const {nav} = useContext(NavigationContext);

  return (
    <header className={nav ? 'header-navActive' : ''}>
      <Logo />
      <Navigation />
      <ChangeLanguage />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
