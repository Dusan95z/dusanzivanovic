import './_footer.scss';
import { useContext } from 'react';
import NavigationContext from '../../context/NavigationContext';

const Footer = () => {
  const { darkMode } = useContext(NavigationContext);

  return (
    <footer className={darkMode ? '' : 'lightTheme-footer'}>
      <p>&copy; Copyright 2022 Dušan Živanović</p>
      <p>All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
