'use strict';

function showTime() {
  let time = new Date();
  let hour = time.getHours(); // 0 - 23
  let minutes = time.getMinutes(); // 0 - 59
  let seconds = time.getSeconds(); // 0 - 59
  let anteOrPostMeridiem = 'AM';

  if (hour === 0) {
    hour = 12;
    anteOrPostMeridiem = 'PM';
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  // cleaner way to do it:

  //hour = (hour < 10) ? "0" + hour : hour;

  //minutes = (minutes < 10) ? "0" + minutes : minutes;

  //seconds = (seconds < 10) ? "0" + seconds : seconds;

  let date = hour + ':' + minutes + ':' + seconds + ' ' + anteOrPostMeridiem;
  document.getElementById('myClockDisplay').innerText = date;

  // setTimeout(showTime, 1000); Option two to get an active clock. setTimeout method inside the function.
}

showTime();
setInterval(showTime, 1000);
