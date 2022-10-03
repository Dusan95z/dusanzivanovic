import './_navigation.scss';
import { useContext } from 'react';
import NavigationLink from './NavigationLink';
import NavigationContext from '../../context/NavigationContext';
import ThemeContext from '../../context/ThemeContext';

const Navigation = () => {
  const { nav } = useContext(NavigationContext);
  const { darkMode } = useContext(ThemeContext);

  const handleClasses = () => {
    if (nav && darkMode) {
      return 'headerNav headerNav-active';
    } else if (nav && !darkMode) {
      return 'headerNav headerNav-active lightTheme-headerNav'
    } else if (!nav && darkMode) {
      return 'headerNav'
    } else if(!nav && !darkMode) {
      return 'headerNav lightTheme-headerNav '
    }
  };

  return (
    <nav
      className={handleClasses()}
    >
      <ul className='nav-ul'>
        <NavigationLink pathName='/' linkTitle='Home' />
        <NavigationLink pathName='/projects' linkTitle='Projects' />
        <NavigationLink pathName='/link3' linkTitle='link3' />
        <NavigationLink pathName='/contact' linkTitle='Contact' />
      </ul>
    </nav>
  );
};

export default Navigation;
