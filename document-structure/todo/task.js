let tasks = document.querySelector(".tasks__list");
let taskInput = document.getElementById("task__input");
let taskAdd = document.getElementById("tasks__add");
let taskDelete = document.querySelector(".task__remove");

taskInput.addEventListener("keydown", (event) => {  
  if(event.key === "Enter") {
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML= 
      `<div class="task__title">${taskInput.value}</div>
       <a href="#" class="task__remove">&times;</a>`;
    tasks.appendChild(newTask);
    console.log(newTask)
  }
})


taskDelete.addEventListener("click", (event, newTask) => {
  event.preventDefault();
  newTask.remove();
})

