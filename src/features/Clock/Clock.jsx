import './_clock.scss';
import { useContext, useState } from 'react';
import DigitalClock from './DigitalClock';
import ThemeContext from '../../context/ThemeContext';

const Clock = () => {
  const { darkMode } = useContext(ThemeContext);
  const [seconds, setSeconds] = useState(new Date().getSeconds() * 6);
  const [minutes, setMinutes] = useState(new Date().getMinutes() * 6);
  const [hours, setHours] = useState(
    new Date().getMinutes() / 2 + new Date().getHours() * 30
  );

  setInterval(() => {
    setSeconds(new Date().getSeconds() * 6);
    setMinutes(new Date().getMinutes() * 6);
    setHours(new Date().getMinutes() / 2 + new Date().getHours() * 30);
  }, 1000);

  return (
    <div className={darkMode ? 'clock' : 'clock lightTheme-clock'}>
      <p className='clock-name-top'>Brand</p>
      <p className='clock-name-bottom'>Dark Theme</p>
      <div className='clock-center-bottom'></div>
      <div className='clock-number clock-number-1'>1</div>
      <div className='clock-number clock-number-2'>2</div>
      <div className='clock-number clock-number-3'>3</div>
      <div className='clock-number clock-number-4'>4</div>
      <div className='clock-number clock-number-5'>5</div>
      <div className='clock-number clock-number-6'>6</div>
      <div className='clock-number clock-number-7'>7</div>
      <div className='clock-number clock-number-8'>8</div>
      <div className='clock-number clock-number-9'>9</div>
      <div className='clock-number clock-number-10'>10</div>
      <div className='clock-number clock-number-11'>11</div>
      <div className='clock-number clock-number-12'>12</div>
      <DigitalClock />
      <div
        className='clock-hour'
        style={{ transform: `translateX(-50%) rotate(${hours}deg)` }}
      ></div>
      <div
        className='clock-minute'
        style={{ transform: `translateX(-50%) rotate(${minutes}deg)` }}
      ></div>
      <div
        className='clock-second'
        style={{ transform: `translateX(-50%) rotate(${seconds}deg)` }}
      ></div>
      <div className='clock-center-top'></div>
    </div>
  );
};

export default Clock;
