import { createContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark-mode') === 'true'
  );

  const handleNav = () => {
    setNav((prev) => !prev);
    setMenu((prev) => !prev);
  };

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <NavigationContext.Provider
      value={{ nav, menu, darkMode, handleNav, handleDarkMode }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
