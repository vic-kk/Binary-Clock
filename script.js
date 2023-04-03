const timer = {
  hours: (time) => time.getHours(),
  mins: (time) => time.getMinutes(),
  secs: (time) => time.getSeconds()
};

const lightIsOn = (digit, time, id) => (timer[digit](time) / (2 ** id) % 2 >= 1);

const getLightsLine = (digits) => [...document.getElementById(digits).querySelectorAll("li")];

/* all "magic" here */
const getBinary = () => {
  const time = new Date();
  for (let digits in timer) {
    getLightsLine(digits).forEach((item, id) => {
      if (lightIsOn(digits, time, id)) return item.classList.add("act");
      item.classList.remove("act");
    });
  }
  document.getElementById("time").innerText = time.toLocaleTimeString(); // 'redraw' time string
};

setInterval(() => getBinary(), 1000);

/*
 * just animates button on the right side.
 * may be deleted
 */
document.getElementById("button").onclick = function() {
  this.classList.add("act");
  setTimeout(() => this.classList.remove("act"), 500);
};
