document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const completedTasks = document.getElementById("completedTasks");

  function createTask(taskText) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add(
      "bg-red-400",
      "rounded-lg",
      "flex",
      "justify-between",
      "items-center",
      "p-4",
      "mt-3",
      "border-2"
    );

    const taskName = document.createElement("h3");
    taskName.classList.add("font-bold");
    taskName.innerText = taskText;
    taskDiv.appendChild(taskName);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("flex", "gap-2");

    const editBtn = document.createElement("button");
    editBtn.classList.add(
      "bg-green-500",
      "text-white",
      "px-3",
      "py-1",
      "rounded-md",
      "hover:bg-green-700"
    );
    editBtn.innerText = "EDIT";
    editBtn.addEventListener("click", function () {
      editTask(taskDiv, taskName);
    });
    btnContainer.appendChild(editBtn);

    const completeBtn = document.createElement("button");
    completeBtn.classList.add(
      "bg-yellow-500",
      "text-white",
      "px-3",
      "py-1",
      "rounded-md",
      "hover:bg-yellow-700"
    );
    completeBtn.innerText = "DONE";
    completeBtn.addEventListener("click", function () {
      completeTask(taskDiv, taskName.innerText);
    });
    btnContainer.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add(
      "bg-red-500",
      "text-white",
      "px-3",
      "py-1",
      "rounded-md",
      "hover:bg-red-700"
    );
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", function () {
      taskDiv.remove();
    });
    btnContainer.appendChild(deleteBtn);

    taskDiv.appendChild(btnContainer);
    taskList.appendChild(taskDiv);
  }

  function editTask(taskDiv, taskName) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = taskName.innerText;
    inputField.classList.add("border", "p-2", "rounded");

    taskDiv.replaceChild(inputField, taskName);

    const saveBtn = document.createElement("button");
    saveBtn.innerText = "SAVE";
    saveBtn.classList.add(
      "bg-blue-500",
      "text-white",
      "px-3",
      "py-1",
      "rounded-md",
      "hover:bg-blue-700",
      "ml-2"
    );
    taskDiv.appendChild(saveBtn);

    saveBtn.addEventListener("click", function () {
      taskName.innerText = inputField.value;
      taskDiv.replaceChild(taskName, inputField);
      taskDiv.removeChild(saveBtn);
    });
  }

  function completeTask(taskDiv, taskText) {
    taskDiv.remove();
    const completedTaskDiv = document.createElement("div");
    completedTaskDiv.classList.add(
      "bg-yellow-400",
      "rounded-lg",
      "flex",
      "justify-between",
      "items-center",
      "p-4",
      "mt-2",
      "border-2"
    );

    const taskName = document.createElement("h3");
    taskName.classList.add("font-bold");
    taskName.innerText = taskText;
    completedTaskDiv.appendChild(taskName);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add(
      "bg-red-500",
      "text-white",
      "px-3",
      "py-1",
      "rounded-md",
      "hover:bg-red-700"
    );
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", function () {
      completedTaskDiv.remove();
    });
    completedTaskDiv.appendChild(deleteBtn);

    completedTasks.appendChild(completedTaskDiv);
  }

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      createTask(taskText);
      taskInput.value = "";
    }
  });
});
