import { createContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  const handleZindex = () => {
    document
      .querySelector('.headerNav')
      .classList.add('headerNav-active-zindex');
  };

  return (
    <NavigationContext.Provider value={{ nav, handleNav, handleZindex }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
