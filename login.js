document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // ✅ Registration Logic
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(registerForm);
      const userDetails = {};
      formData.forEach((value, key) => {
        userDetails[key] = value;
      });

      alert("Registration successful! Welcome, " + userDetails.name + "!");
      window.location.href = "dashboard.html"; // redirect
    });
  }

  // ✅ Login Logic
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = loginForm.username.value;
      const password = loginForm.password.value;

      // Simulate login validation (replace with real logic later)
      if (username && password) {
        alert(`Welcome back, ${username}!`);
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid login credentials.");
      }
    });
  }
});

  
