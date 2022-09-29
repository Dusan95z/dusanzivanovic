const DigitalClock = () => {
  let hoursDigital = new Date().getHours().toLocaleString();
  let minutesDigital = new Date().getHours().toLocaleString();
  let secondsDigital;

  if (new Date().getHours() < 10) {
    hoursDigital = '0' + new Date().getHours();
  } else {
    hoursDigital = new Date().getHours().toLocaleString();
  }

  if (new Date().getMinutes() < 10) {
    minutesDigital = '0' + new Date().getMinutes();
  } else {
    minutesDigital = new Date().getMinutes().toLocaleString();
  }

  if (new Date().getSeconds() < 10) {
    secondsDigital = '0' + new Date().getSeconds();
  } else {
    secondsDigital = new Date().getSeconds().toLocaleString();
  }

  const time = hoursDigital + ':' + minutesDigital + ':' + secondsDigital;

  return <div className='clock-digital'>{time}</div>;
};

export default DigitalClock;
