document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop the page from reloading

      const formData = new FormData(registerForm);
      const userDetails = {};

      formData.forEach((value, key) => {
        userDetails[key] = value;
      });

      // You can store the user data in localStorage (optional)
      // localStorage.setItem("userDetails", JSON.stringify(userDetails));

      alert("Registration successful! Welcome, " + userDetails.name + "!");

      // Redirect to dashboard or any other page
      window.location.href = "dashboard.html";
    });
  } else {
    console.error("Register form not found!");
  }
});
