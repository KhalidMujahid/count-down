const day = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const sec = document.querySelector("#sec");
const title = document.querySelector("#title");
const jokeElement = document.querySelector("#joke");

// Countdown date
let countDown = new Date("Nov 5, 2025 00:00:00").getTime();

// Update countdown every second
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
    title.innerHTML = "🎊 Happy Birthday Callista Xeina 🎊";
    title.classList.add("glow");

    day.innerHTML = 0;
    hours.innerHTML = 0;
    mins.innerHTML = 0;
    sec.innerHTML = 0;

    confetti();
  }
}, 1000);

// Confetti Celebration
function confetti() {
  const duration = 6 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    const colors = ['#ff0', '#ff0080', '#00f', '#0f0', '#ff8c00'];
    confettiEffect({ particleCount: 6, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function confettiEffect({ particleCount, colors }) {
  for (let i = 0; i < particleCount; i++) {
    const el = document.createElement("div");
    el.style.position = "fixed";
    el.style.width = "8px";
    el.style.height = "8px";
    el.style.borderRadius = "50%";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.top = "0px";
    el.style.left = `${Math.random() * window.innerWidth}px`;
    el.style.opacity = "0.9";
    el.style.zIndex = "50";
    document.body.appendChild(el);

    let velocity = Math.random() * 3 + 2;
    let fall = setInterval(() => {
      let top = parseFloat(el.style.top);
      if (top > window.innerHeight) {
        el.remove();
        clearInterval(fall);
      } else {
        el.style.top = top + velocity + "px";
      }
    }, 16);
  }
}

// Birthday jokes
const jokes = [
  "Why do birthdays always smell? 🎂 ... Because people keep passing cake! 😂",
  "What did the cake say to the fork? 🍴 ... You want a piece of me? 😆",
  "Why was the birthday candle upset? 🕯️ ... Because it felt burnt out! 🔥",
  "What’s the best way to remember your wife’s birthday? 💍 ... Forget it once. 😜",
  "Birthdays are like cheese 🧀 ... they stink more with age! 🤣"
];

function showRandomJoke() {
  const random = Math.floor(Math.random() * jokes.length);
  jokeElement.innerHTML = jokes[random];
}

// Show a new joke every 10 seconds
showRandomJoke();
setInterval(showRandomJoke, 10000);
