const day = document.querySelector(".days h1");
const hours = document.querySelector(".hours h1");
const mins = document.querySelector(".mins h1");
const sec = document.querySelector(".sec h1");
const htag = document.querySelector(".name h1");

//Date

let countDown = new Date("Nov 5, 2025 24:00:00").getTime();

let getValues = setInterval(() => {
	let now = new Date().getTime();

	let dis = countDown - now;

	//logic
	let days = Math.floor(dis/ (1000 * 60 * 60 * 24));
	let hr = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let min = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
	let secs = Math.floor((dis % (1000 * 60)) / 100);

	day.innerHTML = `${days} days`;
	hours.innerHTML = `${hr} hours`;
	mins.innerHTML = `${min} minutes`;
	sec.innerHTML = `${secs} seconds`;

	if(dis < 0){
		clearInterval(getValues);
		htag.innerHTML = "Happy Birthday Callista Xeina"
		day.innerHTML = `0 days`;
		hours.innerHTML = `0 hours`;
		mins.innerHTML = `0 minutes`;
		sec.innerHTML = `0 seconds`;
	}
})
