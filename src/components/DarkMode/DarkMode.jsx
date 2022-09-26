import './_darkMode.scss';
import { useContext, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import ThemeContext from '../../context/ThemeContext';

const DarkMode = () => {
  const { darkMode, handleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div
      onClick={handleDarkMode}
      className={darkMode ? 'darkMode' : 'darkMode lightMode'}
    >
      <div
        className={
          darkMode ? 'darkMode-circle' : 'darkMode-circle lightMode-circle'
        }
      ></div>
      <MdDarkMode className='darkMode-dark' />
      <MdLightMode className='darkMode-light' />
    </div>
  );
};

export default DarkMode;
