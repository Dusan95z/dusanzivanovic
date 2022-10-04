import 'react-calendar/dist/Calendar.css';
import './_calendar.scss';
import Calendar from 'react-calendar';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const ReactCalendar = () => {
  const { darkMode } = useContext(ThemeContext);

  return <Calendar className={darkMode ? '' : 'lightTheme-calendar'} />;
};

export default ReactCalendar;
