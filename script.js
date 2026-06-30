const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Prevent empty task
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle completed class on click
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("delete-btn");

    // Delete task
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent toggle when deleting
        li.remove();
    });

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
});