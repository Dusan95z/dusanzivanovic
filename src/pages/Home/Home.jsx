import './_home.scss';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Clock from '../../features/Clock/Clock';
import ReactCalendar from '../../features/Calendar/Calendar';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode ? 'mainHome' : 'mainHome lightTheme-mainHome'}>
      <Clock />
      <ReactCalendar />
    </main>
  );
};

export default Home;

// #167e56
