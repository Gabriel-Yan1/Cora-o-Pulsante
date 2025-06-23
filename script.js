const heart = document.getElementById("heart");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const progressBar = document.querySelector(".progress-bar");
const loveMessage = document.getElementById("love-message");

let progress = 0;
let pulseInterval = null;

startBtn.addEventListener("click", () => {
  heart.classList.add("pulsing");

  progress = 0;
  progressBar.style.width = "0%";
  loveMessage.classList.remove("show");

  if (pulseInterval) clearInterval(pulseInterval);
  pulseInterval = setInterval(() => {
    progress += 2.5;
    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = progress + "%";
      loveMessage.classList.add("show");
    } else {
      progressBar.style.width = progress + "%";
      loveMessage.classList.remove("show");
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  heart.classList.remove("pulsing");

  if (pulseInterval) {
    clearInterval(pulseInterval);
    pulseInterval = null;
  }

  progress = 0;
  progressBar.style.width = "0%";
  loveMessage.classList.remove("show");
});
