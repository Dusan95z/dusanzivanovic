import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationContext from '../../context/NavigationContext';

const NavigationLink = ({ pathName, linkTitle }) => {
  const { handleNav } = useContext(NavigationContext);

  return (
    <li className='nav-li'>
      <NavLink
        onClick={handleNav}
        to={{ pathname: `${pathName}` }}
        end
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        {linkTitle}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
