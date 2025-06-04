// mytasks.js

// Считываем существующие задачи из localStorage (или создаём пустой массив)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskContainer = document.getElementById("task-container");
const inputField = document.getElementById("new-task-input");
const categorySelect = document.getElementById("new-task-category");
const prioritySelect = document.getElementById("new-task-priority");
const addBtn = document.getElementById("add-task-btn");

// Функция для сохранения текущего состояния массива tasks в localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Функция для отрисовки существующих задач на странице My Tasks
function renderMyTasks() {
  taskContainer.innerHTML = ""; // очищаем контейнер

  if (tasks.length === 0) {
    taskContainer.innerHTML = "<p class='no-tasks'>No tasks added yet.</p>";
    return;
  }

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.classList.add("task-card");
    if (task.status === "completed") {
      card.classList.add("completed");
    }

    // Заголовок задачи
    const titleEl = document.createElement("h4");
    titleEl.innerText = task.title;
    card.appendChild(titleEl);

    // Статус (In Progress / Completed)
    const statusEl = document.createElement("p");
    statusEl.innerText = (task.status === "completed") ? "Completed" : "In Progress";
    card.appendChild(statusEl);

    const catEl = document.createElement("p");
    catEl.innerText = "Category: " + task.category.charAt(0).toUpperCase() + task.category.slice(1);
    card.appendChild(catEl);

    const tag = document.createElement("span");
    tag.classList.add("tag", task.priority);
    tag.innerText = task.priority.charAt(0).toUpperCase() + task.priority.slice(1) + " Priority";
    card.appendChild(tag);

    if (task.status === "inProgress") {
      const completeBtn = document.createElement("button");
      completeBtn.classList.add("complete-btn");
      completeBtn.innerText = "Mark Completed";
      completeBtn.addEventListener("click", () => {
        tasks[index].status = "completed";
        saveTasks();
        renderMyTasks();
      });
      card.appendChild(completeBtn);
    }

    taskContainer.appendChild(card);
  });
}

addBtn.addEventListener("click", () => {
  const title = inputField.value.trim();
  const category = categorySelect.value;
  const priority = prioritySelect.value;

  if (title === "") {
    alert("Please enter a task name.");
    return;
  }

  const newTask = {
    title,
    category,
    priority,
    status: "inProgress" 
  };
  tasks.push(newTask);
  saveTasks();

  inputField.value = "";
  categorySelect.value = "work";
  prioritySelect.value = "high";

  renderMyTasks();
});

window.addEventListener("load", () => {
  renderMyTasks();
});
