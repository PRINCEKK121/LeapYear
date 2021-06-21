const displayMessage = document.querySelector('#display-message');
const form = document.querySelector('form');
const btn = document.querySelector('.btn-block');

const isLeapYear = year => {
  let leapYear = false;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leapYear = true;
      }
    } else {
      leapYear = true
    }
  } 

  return leapYear;
}

const result = (message) => displayMessage.textContent = message;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const year = document.querySelector('input[type="number"]').valueAsNumber;

  if (isLeapYear(year)) result(`${year} is a Leap Year`)
  else result(`${year} is not a Leap Year`);
});