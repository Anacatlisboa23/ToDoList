const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("input-button");

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = inputBox.value.trim();
  if (!taskText) {
    alert("Please write down a task");
    return;
  }

  // Criar <li>
  const li = document.createElement("li");

  // Criar <label> com checkbox e span
  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  label.appendChild(checkbox);
  label.appendChild(taskSpan);

  // Criar botão Edit
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  // Criar botão Delete
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Adicionar elementos ao <li>
  li.appendChild(label);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Eventos
  checkbox.addEventListener("click", () => {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

  editBtn.addEventListener("click", () => {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      checkbox.checked = false;
      li.classList.remove("completed");
      updateCounters();
    }
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCounters();
  });

  // Adicionar <li> à lista
  listContainer.appendChild(li);
  inputBox.value = "";
  updateCounters();
}

function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks =
    document.querySelectorAll("#list-container li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}
