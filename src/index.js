import "@pnotify/core/dist/BrightTheme.css";
import Chart from "chart.js/auto";
const keyText = document.querySelector(".key");
const keys = [
  "Space",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Escape",
  "Enter",
  "ControlLeft",
  "Tab",
  "CapsLock",
];
let currentKeyIndex = 0;
currentKeyIndex %= 10;
keyText.textContent = keys[currentKeyIndex];
document.addEventListener("keydown", (e) => {
  if (e.code === keys[currentKeyIndex]) {
    PNotify.success({
      title: "Right key!",
      delay: 500,
    });
  } else {
    PNotify.error({
      title: "Wrong key!",
      delay: 500,
    });
  }

  currentKeyIndex++;
  currentKeyIndex %= 10;
  keyText.textContent = keys[currentKeyIndex];
});

// 2
const ctx = document.getElementById('sales-chart')
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const salesChart = new Chart(ctx, {type: 'line', data: chartData});
