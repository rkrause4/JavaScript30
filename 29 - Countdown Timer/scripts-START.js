let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const cancelButton = document.querySelector('.time__cancel');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  //   Interval to countdown the time selected
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Check if we should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // Display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  document.title = `${display} Remaining`;
  timerDisplay.textContent = display;
  if (cancelButton.classList.contains('hidden')) {
    console.log('hidden is true');
    cancelButton.classList.remove('hidden');
  }
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${hour > 12 ? 'pm' : 'am'}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);

  if (cancelButton.classList.contains('hidden')) {
    cancelButton.classList.remove('hidden');
  }
}

function cancelTimer() {
  timer(0);
  endTime.textContent = 'Timer Canceled';
  if (!cancelButton.classList.contains('hidden')) {
    console.log(!cancelButton.classList.contains('hidden'));
    cancelButton.classList.add('hidden');
  }
}

// Event Listeners
buttons.forEach(button => button.addEventListener('click', startTimer));
// Get the form values on submit, passes param to timer function
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});

cancelButton.addEventListener('click', cancelTimer);
