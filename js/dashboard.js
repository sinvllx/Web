// dashboard.js

window.addEventListener("load", () => {
  // Считываем задачи из localStorage (или получаем пустой массив)
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Функция для подсчёта и отображения статистики
  function updateStats() {
    const totalCount = tasks.length;
    const completedCount = tasks.filter(t => t.status === "completed").length;
    const inProgressCount = tasks.filter(t => t.status === "inProgress").length;

    document.getElementById("total-tasks-count").innerText = totalCount;
    document.getElementById("completed-tasks-count").innerText = completedCount;
    document.getElementById("inprogress-tasks-count").innerText = inProgressCount;
  }

  // Функция для сортировки по приоритету (High → Medium → Low)
  function sortByPriority(arr) {
    const order = { high: 1, medium: 2, low: 3 };
    return arr.sort((a, b) => order[a.priority] - order[b.priority]);
  }

  // Функция для отрисовки карточек задач в контейнере
  function renderTasks() {
    const container = document.getElementById("dashboard-task-container");
    container.innerHTML = ""; // очищаем перед отрисовкой

    // Получаем выбранные фильтры
    const categoryFilter = document.getElementById("category-filter").value;
    const priorityFilter = document.getElementById("priority-filter").value;

    // Клонируем массив и фильтруем
    let filtered = tasks.slice();

    if (categoryFilter !== "all") {
      filtered = filtered.filter(t => t.category === categoryFilter);
    }
    if (priorityFilter !== "all") {
      filtered = filtered.filter(t => t.priority === priorityFilter);
    }

    // Сортировка по приоритету
    filtered = sortByPriority(filtered);

    // Если после фильтрации нет задач
    if (filtered.length === 0) {
      container.innerHTML = "<p class='no-tasks'>No tasks to display.</p>";
      return;
    }

    // Создаем карточку для каждой задачи
    filtered.forEach(task => {
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

      // Приоритет
      const tag = document.createElement("span");
      tag.classList.add("tag", task.priority);
      tag.innerText = task.priority.charAt(0).toUpperCase() + task.priority.slice(1) + " Priority";
      card.appendChild(tag);

      container.appendChild(card);
    });
  }

  // Инициализация: отрисуем статистику и задачи
  updateStats();
  renderTasks();

  // Перерисовка при изменении фильтров
  document.getElementById("category-filter").addEventListener("change", () => {
    renderTasks();
  });
  document.getElementById("priority-filter").addEventListener("change", () => {
    renderTasks();
  });

  // Кнопка перехода на страницу My Tasks
  document.getElementById("go-to-add-task").addEventListener("click", () => {
    window.location.href = "mytasks.html";
  });
});

