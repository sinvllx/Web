// Получаем все задачи из localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const archiveContainer = document.getElementById('archive-task-container');

// Функция удалить задачу из архива (удаляем из общего массива tasks)
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  displayArchiveTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Отобразить только выполненные задачи
function displayArchiveTasks() {
  archiveContainer.innerHTML = "";

  // Фильтруем выполненные задачи
  const completedTasks = tasks
    .map((task, idx) => ({...task, idx}))
    .filter(task => task.status === "completed");

  if (completedTasks.length === 0) {
    archiveContainer.innerHTML = "<p>No completed tasks yet.</p>";
    return;
  }

  completedTasks.forEach(({title, idx}) => {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card completed';
    taskCard.innerHTML = `
      <h4>${title}</h4>
      <button class="delete-button">🗑️</button>
    `;
    archiveContainer.appendChild(taskCard);

    // Удаление задачи по кнопке
    taskCard.querySelector('.delete-button').addEventListener('click', () => {
      deleteTask(idx);
    });
  });
}

// Запускаем отрисовку при загрузке страницы
window.addEventListener('load', () => {
  displayArchiveTasks();
});
