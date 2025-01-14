const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function appendToDisplay() {
  if (inputBox.value === "") {
    alert("Enter Task!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
            <span class="task-text">${inputBox.value}</span>
            <div>
                <span class="edit" onclick="editTask(this)">Edit</span>
                <span class="delete" onclick="deleteTask(this)">Delete</span>
            </div>
        `;
    listContainer.appendChild(li);
    inputBox.value = "";
  }
}

function deleteTask(element) {
  element.parentElement.parentElement.remove();
}

function editTask(element) {
  const li = element.parentElement.parentElement;
  const taskText = li.querySelector(".task-text");
  console.log("Task Test Object: ", taskText);
  const newTask = prompt("Edit your task:", taskText.textContent);
  if (newTask !== null) {
    taskText.textContent = newTask;
  }
}
