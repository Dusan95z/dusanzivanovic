import { createContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
    setMenu((prev) => !prev);
  };

  const handleMenu = () => {
    if (nav === true) {
      setMenu(false);
      setNav(false);
    }
  };

  return (
    <NavigationContext.Provider
      value={{ nav, menu, handleNav, handleMenu }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
