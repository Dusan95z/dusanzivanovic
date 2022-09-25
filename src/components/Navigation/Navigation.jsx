import './_navigation.scss';
import { useContext } from 'react';
import NavigationLink from './NavigationLink';
import NavigationContext from '../../context/NavigationContext';

const Navigation = () => {
  const { nav } = useContext(NavigationContext);

  return (
    <nav
      className={nav ? 'headerNav headerNav-active' : 'headerNav'}
      onTransitionEnd={(e) =>
        e.target.classList.contains('headerNav-active') &&
        e.target.classList.add('headerNav-active-zindex')
      }
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
