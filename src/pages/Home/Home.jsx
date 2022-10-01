import './_home.scss';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Clock from '../../features/Clock/Clock';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode ? 'mainHome' : 'mainHome lightTheme-mainHome'}>
      <Clock />
    </main>
  );
};

export default Home;

// https://www.youtube.com/watch?v=o1yMqPyYeAo
// https://github.com/lashaNoz/Calendar