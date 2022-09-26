import './_hamburgerMenu.scss';
import { useContext } from 'react';
import NavigationContext from '../../context/NavigationContext';
import ThemeContext from '../../context/ThemeContext';

const HamburgerMenu = () => {
  const { menu, handleNav } = useContext(NavigationContext);
  const { darkMode } = useContext(ThemeContext);

  const handleClasses = () => {
    if (menu && darkMode) {
      return 'hamburgerMenu hamburgerMenu-active';
    } else if (menu && !darkMode) {
      return 'hamburgerMenu hamburgerMenu-active lightTheme-hamburgerMenu';
    } else if (!menu && darkMode) {
      return 'hamburgerMenu';
    } else if (!menu && !darkMode) {
      return 'hamburgerMenu lightTheme-hamburgerMenu';
    }
  };

  return (
    <div onClick={handleNav} className={handleClasses()}>
      <div className='hamburgerMenu-line1'></div>
      <div className='hamburgerMenu-line2'></div>
      <div className='hamburgerMenu-line3'></div>
    </div>
  );
};

export default HamburgerMenu;
