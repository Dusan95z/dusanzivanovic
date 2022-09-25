import './_navigation.scss';
import NavigationLink from './NavigationLink';
import { useContext } from 'react';
import NavigationContext from '../../context/NavigationContext';

const Navigation = () => {
  const { nav, handleZindex } = useContext(NavigationContext);

  return (
    <nav
      className={nav ? 'headerNav headerNav-active' : 'headerNav'}
      onTransitionEnd={handleZindex}
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
