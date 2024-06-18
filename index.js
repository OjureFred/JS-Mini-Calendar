const monthEl = document.getElementById("month-name")
const dayName = document.getElementById("day-name")
const dayNumber = document.getElementById("day-number")
const year = document.getElementById("year")

const time = new Date().toString()

monthEl.innerText = time.toLocaleString("en", {month: "short"})

dayName.innerText = time.toLacaleString("en", {weekday: "long"})
dayNumber.innerText = time.getDate()
year.innerText = time.getFullYear()