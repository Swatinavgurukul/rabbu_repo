const comingYear = document.querySelector(".coming-year");
const birthDate = 7
const birthMonth = "October"
const today = new Date();
var nextYear;
if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() + 1 > birthDate)) {
  nextYear = new Date().getFullYear() + 1;
}
else {
  nextYear = new Date().getFullYear();
}
comingYear.innerHTML = nextYear;
function countdown() {
  const remaining = new Date(`${nextYear}-${birthMonth}-${birthDate} 00:00:00`) - new Date();
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(remaining / (1000 * 60)) % 60;
  const seconds = Math.floor(remaining / 1000) % 60;
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}
countdown()
setInterval(countdown, 1000);