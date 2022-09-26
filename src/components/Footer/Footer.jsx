import './_footer.scss';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={darkMode ? '' : 'lightTheme-footer'}>
      <p>&copy; Copyright 2022 Dušan Živanović</p>
      <p>All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
