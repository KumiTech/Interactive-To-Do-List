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
        const delbtn = document.createElement("button")
        const checkbox = document.createElement("input")


        checkbox.type = 'checkbox'
        checkbox.classList.add("checkbox")
        delbtn.classList.add("delbtn")
        listElement.classList.add("list-item");
        delbtn.textContent = "Delete"
        listElement.textContent = taskText;
        
        listElement.appendChild(delbtn)
        taskList.appendChild(listElement);

        delbtn.addEventListener("click", () => {
            taskList.removeChild(listElement)
            taskInput.focus();
        })
    }
    // container.appendChild(taskList)
    
    taskInput.value = "";
}

addBtn.addEventListener("click", handleAddTask);