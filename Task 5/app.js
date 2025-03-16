const inputField = document.getElementById("input");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "=") {
      try {
        inputField.value = eval(inputField.value);
      } catch {
        inputField.value = "Error";
      }
    } else if (value === "AC") {
      inputField.value = "";
    } else if (value === "DEL") {
      inputField.value = inputField.value.slice(0, -1);
    } else {
      inputField.value += value;
    }
  });
});
