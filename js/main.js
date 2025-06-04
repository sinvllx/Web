
window.onload = function () {
  alert("Welcome to the To-Do App!");
};


let userName = "Sabina";
let taskCount = 3;
let isCompleted = false;

let message = "Hello, " + userName + "! You have " + taskCount + " tasks.";
let sum = 7 + 5;
let mod = 10 % 3;

taskCount++;
taskCount--;


function greetUser(name) {
  alert("Welcome back, " + name + "!");
}
function multiply(a, b) {
  return a * b;
}
greetUser(userName);

let randomNumber = Math.floor(Math.random() * 100);
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("randomDisplay").textContent =
    "Your lucky number: " + randomNumber;

  if (randomNumber > 50) {
    console.log("Big number!");
  } else {
    console.log("Small number!");
  }


  let tasks = ["Study JS", "Write report", "Check emails"];
  let taskList = document.getElementById("taskList");
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i];
    taskList.appendChild(li);
  }
  tasks.push("Meeting at 5PM");
});

function updateInfo() {
  const info = document.getElementById("infoBox");
  info.textContent = "This is updated by JavaScript!";
  info.style.color = "green";
  info.style.fontWeight = "bold";
}

document.getElementById("changeInfoBtn").addEventListener("click", updateInfo);
