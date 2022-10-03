import './_calendar.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Calendar = () => {
  const calendarMonth = new Date().getMonth();
  const calendarDate = new Date().toDateString();

  const calendarMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  console.log(new Date().toString());

  const handlePreviousMonth = () => {
    console.log('previous month');
  };

  const handleNextMonth = () => {
    console.log('next month');
  };

  return (
    <div className='calendar'>
      <div className='calendar-month'>
        <button onClick={handlePreviousMonth} className='calendar-month-icon'>
          <FaArrowLeft />
        </button>
        <div className='calendar-date'>
          <h2>{calendarMonths[calendarMonth]}</h2>
          <p>{calendarDate}</p>
        </div>
        <button onClick={handleNextMonth} className='calendar-month-icon'>
          <FaArrowRight />
        </button>
      </div>
      <div className='calendar-weekdays'>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
      <div className='calendar-days'>
        <p className='prev-day'>26</p>
        <p className='prev-day'>27</p>
        <p className='prev-day'>28</p>
        <p className='prev-day'>29</p>
        <p className='prev-day'>30</p>
        <p>1</p>
        <p>2</p>
        <p className='calendar-today'>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
        <p>23</p>
        <p>24</p>
        <p>25</p>
        <p>26</p>
        <p>27</p>
        <p>28</p>
        <p>29</p>
        <p>30</p>
        <p>31</p>
        <p className='next-day'>1</p>
        <p className='next-day'>2</p>
        <p className='next-day'>3</p>
        <p className='next-day'>4</p>
        <p className='next-day'>5</p>
        <p className='next-day'>6</p>
      </div>
    </div>
  );
};

export default Calendar;
