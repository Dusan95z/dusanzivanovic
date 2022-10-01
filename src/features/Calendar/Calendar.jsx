import 'react-calendar/dist/Calendar.css';
import './_calendar.scss';
import { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import ThemeContext from '../../context/ThemeContext';

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <Calendar
        className={darkMode ? '' : 'lightTheme'}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CalendarComponent;
