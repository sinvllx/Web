const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginBtn.onclick = () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
};

registerBtn.onclick = () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
};

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

registerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.elements.name.value.trim();
  const email = this.elements.email.value.trim().toLowerCase();
  const password = this.elements.password.value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  let users = getUsers();

  if (users.find(u => u.email === email)) {
    alert("User with this email already exists.");
    return;
  }

  users.push({ name, email, password });
  saveUsers(users);

  alert("Registered successfully! Please login.");

  loginBtn.click();
  this.reset();
});

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = this.elements.email.value.trim().toLowerCase();
  const password = this.elements.password.value;

  let users = getUsers();

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    alert("Invalid email or password.");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUserEmail", email);

  alert(`Welcome back, ${user.name}!`);

  window.location.href = "dashboard.html";
});
