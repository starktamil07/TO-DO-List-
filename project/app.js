// Calendar Logic
const calendar = document.getElementById("calendar");
const calendarTitle = document.getElementById("calendar-title");
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const monthNames = [
  "January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"
];

function generateCalendar(month, year) {
  calendar.innerHTML = "";
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calendarTitle.innerText = `${monthNames[month]} ${year}`;

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "day";
    calendar.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayBox = document.createElement("div");
    dayBox.className = `day ${day === today.getDate() && month === today.getMonth() && year === today.getFullYear() ? "active" : ""}`;
    if ((firstDay + day - 1) % 7 === 0) dayBox.classList.add("sunday");
    if ((firstDay + day - 1) % 7 === 6) dayBox.classList.add("saturday");
    dayBox.textContent = day;
    calendar.appendChild(dayBox);
  }
}

document.getElementById("prev-month").addEventListener("click", () => {
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
  generateCalendar(currentMonth, currentYear);
});

document.getElementById("next-month").addEventListener("click", () => {
  currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
  currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
  generateCalendar(currentMonth, currentYear);
});

// Initialize Calendar
generateCalendar(currentMonth, currentYear);

// Task and Routine Logic
const tasksContainer = document.getElementById("tasks-container");
const routineContainer = document.getElementById("routine-container");

function addItem(container, inputId) {
  const input = document.getElementById(inputId);
  if (input.value.trim() !== "") {
    const item = document.createElement("div");
    item.className = "task-box";
    item.textContent = input.value;
    item.addEventListener("dblclick", () => item.classList.toggle("completed"));
    container.appendChild(item);
    input.value = "";
  }
}

document.getElementById("add-task").addEventListener("click", () => addItem(tasksContainer, "task-input"));
document.getElementById("add-routine").addEventListener("click", () => addItem(routineContainer, "routine-input"));