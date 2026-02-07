// 1. Get references to the clock hands using their IDs
const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#min");
const secondHand = document.querySelector("#sec");

// 2. Function to calculate and update the hand positions
const updateClock = () => {
  // Get the current time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  /*
    --- ANGLE CALCULATION LOGIC ---
    The clock face is 360 degrees.

    A. Second Hand:
    60 seconds = 360 degrees
    1 second = 6 degrees (360 / 60)
  */
  const secondDegrees = seconds * 6;

  /*
    B. Minute Hand:
    60 minutes = 360 degrees
    1 minute = 6 degrees (360 / 60)
  */
  const minuteDegrees = minutes * 6;

  /*
    C. Hour Hand:
    12 hours = 360 degrees
    1 hour = 30 degrees (360 / 12)
    
    *Correction for Minutes:* The hour hand moves *between* the numbers.
    60 minutes = 30 degrees of hour movement
    1 minute = 0.5 degrees (30 / 60)
    
    Angle = (current hour * 30) + (current minute * 0.5)
    We use `hours % 12` to handle 24-hour format and calculate the 12-hour position.
  */
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;

  // Apply the rotation using CSS transform
  // The 'rotate' function sets the rotation from the hand's defined 'transform-origin' (which is the center)
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
};

// 3. Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Optional: Run the function once immediately to prevent a one-second delay on load
updateClock();
