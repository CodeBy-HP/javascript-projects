const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function updateClock() {
  const now = new Date();

  const h = now.getHours() % 12;
  const m = now.getMinutes();
  const s = now.getSeconds();

  const hourDeg = 30 * h + 0.5 * m;
  const minuteDeg = 6 * m;
  const secondDeg = 6 * s;

  hourHand.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
