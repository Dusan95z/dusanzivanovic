import './_home.scss';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Clock from '../../features/Clock/Clock';
import CalendarComponent from '../../features/Calendar/Calendar';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode ? 'mainHome' : 'mainHome lightTheme-mainHome'}>
      <CalendarComponent />
      <Clock />
    </main>
  );
};

export default Home;
