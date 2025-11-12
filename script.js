const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");
// const container = document.querySelector(".container")

// function to handle button click event 
function handleAddTask(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim()
    if (taskText === ""){
        alert("Type somthing in here, should not be empty");
        return;
    }
    else{
        const listElement = document.createElement("li");
        listElement.classList.add = "list-item";
        listElement.textContent = taskText;
        taskList.appendChild(listElement);
    }
    // container.appendChild(taskList)
    taskInput.value = "";
}

addBtn.addEventListener("click", handleAddTask);