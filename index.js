const day = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const sec = document.querySelector(".sec");
const htag = document.querySelector("h1");

let countDown = new Date("Nov 5, 2025 00:00:00").getTime();

let getValues = setInterval(() => {
  let now = new Date().getTime();
  let dis = countDown - now;

  let days = Math.floor(dis / (1000 * 60 * 60 * 24));
  let hr = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((dis % (1000 * 60)) / 1000);

  day.innerHTML = days;
  hours.innerHTML = hr;
  mins.innerHTML = min;
  sec.innerHTML = secs;

  if (dis < 0) {
    clearInterval(getValues);
    document.querySelector("h1").innerHTML = "🎉 Happy Birthday Callista Xenia 🎉";
    day.innerHTML = 0;
    hours.innerHTML = 0;
    mins.innerHTML = 0;
    sec.innerHTML = 0;
  }
}, 1000);
