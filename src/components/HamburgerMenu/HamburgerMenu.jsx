import './_hamburgerMenu.scss';
import { useContext } from 'react';
import NavigationContext from '../../context/NavigationContext';

const HamburgerMenu = () => {
  const { menu, handleNav } = useContext(NavigationContext);

  return (
    <div
      onClick={handleNav}
      className={menu ? 'hamburgerMenu hamburgerMenu-active' : 'hamburgerMenu'}
    >
      <div className='hamburgerMenu-line1'></div>
      <div className='hamburgerMenu-line2'></div>
      <div className='hamburgerMenu-line3'></div>
    </div>
  );
};

export default HamburgerMenu;
