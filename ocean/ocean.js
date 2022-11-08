const audio = document.querySelector('#audio');
const video = document.querySelector('#myVideo');
const countdown = document.querySelector('#countdown');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');

let clear;
const timer = 5;
let amountTime = timer * 60;

function calculateTime() {
  let minutes = Math.floor(amountTime / 60);
  let seconds = amountTime % 60;

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  countdown.textContent = `${minutes} : ${seconds}`;
  amountTime--;

  if (amountTime < 0) {
    stopTimer();
    amountTime = timer * 60;
    audio.pause();
    audio.currentTime = 0;
    countdown.textContent = 'Relax...';
    clear = '';
    play.disabled = false;
    stop.disabled = true;
  }
}

function stopTimer() {
  clearInterval(clear);
}

play.addEventListener('click', () => {
  amountTime = timer * 60;
  stopTimer();

  audio.play();
  video.play();

  play.disabled = true;
  stop.disabled = false;

  clear = setInterval(calculateTime, 1000);
});

stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  play.disabled = false;
  stop.disabled = true;
  stopTimer();
  clear = '';
  amountTime = timer * 60;
  countdown.textContent = 'Relax...';
});
