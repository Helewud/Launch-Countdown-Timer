let day = document.getElementById("days"),
  hour = document.getElementById("hours"),
  mins = document.getElementById("minutes"),
  secs = document.getElementById("seconds");

const finalDate = new Date("Feb 14, 2021 00:00:00").getTime();

const x = setInterval(function () {
  const currentDate = new Date().getTime(),
    totalTime = finalDate - currentDate;
  let days = Math.floor(totalTime / (1000 * 60 * 60 * 24)),
    hours = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((totalTime % (1000 * 60)) / 1000);

  if (days < 10) days = "0" + days;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  day.dataset.number = days;
  hour.dataset.number = hours;
  mins.dataset.number = minutes;
  secs.dataset.number = seconds;
}, 1000);
