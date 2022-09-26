import { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark-mode') === 'true'
  );

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
