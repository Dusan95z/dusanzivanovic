import './_home.scss';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Clock from '../../features/Clock/Clock';
import Calendar from '../../features/Calendar/Calendar';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode ? 'mainHome' : 'mainHome lightTheme-mainHome'}>
      <Clock />
      <Calendar />
    </main>
  );
};

export default Home;

// https://www.youtube.com/watch?v=m9OSBJaQTlM  js
// https://www.youtube.com/watch?v=Q5Xen_Y7lUk  react