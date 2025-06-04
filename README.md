Project Structure
bash
Копировать
Редактировать
/css
  └── dashboard.css       # Styles for all pages

/js
  ├── auth.js             # Login & Register logic
  ├── dashboard.js        # Dashboard logic (stats, task list, sorting)
  └── mytasks.js          # My Tasks logic (add/edit/delete/filter)

/auth.html                # Login & Register page
/dashboard.html           # Dashboard (overview & sorting)
/mytasks.html             # My Tasks (add/edit/delete with category & priority)
/archive.html             # Archive (completed tasks)
/index.html               # Homepage (landing page)
README.md                 # This file
Quick Start
Clone or download the repository.

Serve the folder via any HTTP server (e.g., VSCode Live Server, npx http-server), or open dashboard.html in a browser.

Visit dashboard.html (or index.html) in your browser.

Page Overview
1. Authentication (auth.html)
Register: enter Full Name, Email, Password. Stores users in localStorage.users.

Login: verify credentials against localStorage.users. On success, set localStorage.isLoggedIn = "true" and redirect to dashboard.html.

2. Dashboard (dashboard.html)
Stats: Total Tasks, Completed, In Progress (read from localStorage.tasks).

Filter: “Sort by Priority” dropdown (All, High, Medium, Low).

Add Task: “+ Add Task” button redirects to mytasks.html.

Task List: displays each task’s title, category, and priority. Checking the checkbox toggles its completed status.

3. My Tasks (mytasks.html)
Add New Task: enter title, select category (Work / Study / Personal) and priority (High / Medium / Low). Stores tasks in localStorage.tasks.

Filters: dropdowns to show only tasks of a specific category or priority.

Task List: each item shows title, category, priority, and a delete button. Checkbox toggles status.

4. Archive (archive.html)
Lists only tasks with status === "completed" from localStorage.tasks. (Optionally, add delete or restore functionality.)

Data Storage (localStorage)
Users:

Key: users

Value: JSON array of { name, email, password }.

Session:

Key: isLoggedIn (string "true" or absent)

Tasks:

Key: tasks

Value: JSON array of { title, status, category, priority }.

status is "inProgress" or "completed".

Stats:

Keys: totalTasks, completedTasks, inProgressTasks (updated whenever tasks change).

How It Works
When Dashboard loads:

If localStorage.isLoggedIn !== "true", redirect to auth.html.

Read tasks, calculate “Total / Completed / In Progress,” and render stats.

Filter tasks by selected priority and display them.

When “+ Add Task” clicked on Dashboard:

Redirect to mytasks.html.

On My Tasks:

Add a new task by filling title, category, and priority → saves in localStorage.tasks.

Filters update the displayed list in real time.

Toggling checkbox updates task’s status and localStorage.

Back on Dashboard:

Refresh or revisit to see the newly added task and updated statistics.

Notes & Next Steps
Security: Passwords are stored in plain text in localStorage. For production, implement a real backend with hashed passwords.

Editing Tasks: Currently tasks can only be added, toggled, or deleted. To add “edit” functionality, modify mytasks.js.

Archive Page: Only completed tasks appear. You can add “Restore” or “Delete Forever” buttons as needed.

Responsive Design: The CSS is mobile-friendly with breakpoints for narrower screens.
