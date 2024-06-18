const monthEl = document.getElementById("month-name")
const dayName = document.getElementById("day-name")
const dayNumber = document.getElementById("day-number")
const year = document.getElementById("year")

const date = new Date()
console.log(date.getMonth())
//monthEl.innerText = date.toLocaleString("en", {month: "short"})
monthEl.innerText = date.toLocaleString('default', { month: 'long' });
dayName.innerText = date.toLocaleString("default", {weekday: "long"})
dayNumber.innerText = date.getDate()
year.innerText = date.getFullYear()