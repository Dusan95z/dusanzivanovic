import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationContext from '../../context/NavigationContext';

const NavigationLink = ({ pathName, linkTitle }) => {
  const { handleMenu } = useContext(NavigationContext);

  return (
    <li className='nav-li'>
      <NavLink
        onClick={handleMenu}
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
