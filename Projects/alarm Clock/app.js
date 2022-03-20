console.log("script is included");

let input = document.getElementById("timerInput");
let timer = document.getElementById("setTimer");
let clock = document.getElementById("timeClock");
timer.addEventListener("click", () => {
  startTimer();
});
var audio = new Audio("images/audio.mp3");
const startTimer = () => {
  if (timer.innerHTML === "Start") {
    let time = parseInt(input.value);
    startClock(time);
    input.value = "";
  } else {
    timer.innerHTML = "Start";
    audio.pause();
  }
};

const startClock = (time) => {
  var refreshIntervalId = setInterval(() => {
    if (parseInt(time) > -1) {
      console.log("inside set interval");
      let min = Math.floor(time / 60);
      let sec = Math.floor(time % 60);
      sec = sec < 10 ? "0" + sec.toString() : sec;
      clock.innerHTML = `${min.toString()}:${sec.toString()}`;
      time = parseInt(time) - 1;
    } else {
      audio.play();
      timer.innerHTML = "Kill";
      console.log(time);
      clearInterval(refreshIntervalId);
    }
  }, 1000);
};
