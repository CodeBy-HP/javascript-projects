let hr = document.querySelector("#hour");
let sec = document.querySelector("#sec");
let min = document.querySelector("#min");

const displayTime = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  hr.style.transform = `rotate(${h * 30 + m * 0.5}deg)`;
  min.style.transform = `rotate(${m * 6}deg)`;
  sec.style.transform = `rotate(${s * 6}deg)`;
};

setInterval(displayTime, 1000);

/*
12 hr = 360deg
1 hr = 30deg
x hr = x * 30deg + m * 0.5deg

60 min = 30deg
1 min = 0.5deg
m min = 0.5 * mdeg

60 min = 360deg
1 min = 6deg
y min = y * 6deg

60 sec = 360deg
1 sec = 6deg
z sec = z * 6deg
*/
