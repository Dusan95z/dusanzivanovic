import './_hamburgerMenu.scss';
import { useState, useContext } from 'react';
import NavigationContext from '../../context/NavigationContext';

const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false);
  const { handleNav } = useContext(NavigationContext);

  const handleMenu = () => {
    setMenu((prev) => !prev);
    handleNav();
  };

  return (
    <div
      onClick={handleMenu}
      className={menu ? 'hamburgerMenu hamburgerMenu-active' : 'hamburgerMenu'}
    >
      <div className='hamburgerMenu-line1'></div>
      <div className='hamburgerMenu-line2'></div>
      <div className='hamburgerMenu-line3'></div>
    </div>
  );
};

export default HamburgerMenu;
