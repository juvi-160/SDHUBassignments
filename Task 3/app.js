document.addEventListener("DOMContentLoaded", () => {
  const passwordField = document.getElementById("password");
  const verifyPasswordField = document.getElementById("verifyPass");
  const showPassToggle = document.querySelectorAll("#showpass");
  const emailField = document.getElementById("email");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.querySelector("button");

  const captchaDisplay = document.querySelector("h2");
  const captchaInput = document.getElementById("captchaInput");

  // Generate a simple Captcha
  function generateCaptcha() {
    let captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    captchaDisplay.innerText = captcha;
    return captcha;
  }

  let generatedCaptcha = generateCaptcha();

  // Toggle Password Visibility
  showPassToggle.forEach((icon) => {
    icon.addEventListener("click", () => {
      let inputField = icon.previousElementSibling;
      if (inputField.type === "password") {
        inputField.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      } else {
        inputField.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      }
    });
  });

  // Form Submission
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const password = passwordField.value.trim();
    const verifyPassword = verifyPasswordField.value.trim();
    const email = emailField.value.trim();
    const userCaptcha = captchaInput.value.trim().toUpperCase();

    // Check if passwords match
    if (password !== verifyPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if Captcha is correct
    if (userCaptcha !== generatedCaptcha) {
      alert("Captcha is incorrect!");
      return;
    }

    // Check if terms & conditions are accepted
    if (!checkbox.checked) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Store Email & Password in Local Storage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration Successful! 🎉");
  });
});
