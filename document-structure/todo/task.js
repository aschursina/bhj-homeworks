let tasks = document.querySelector(".tasks__list");
let taskInput = document.getElementById("task__input");
let taskAdd = document.getElementById("tasks__add");


taskAdd.addEventListener("click", (event) => {  
  event.preventDefault();
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML= 
    `<div class="task__title">${taskInput.value}</div>
     <a href="#" class="task__remove">&times;</a>`;
  tasks.appendChild(newTask);
  taskInput.value = null;
  
  let taskDelete = document.querySelector(".task__remove");
  taskDelete.addEventListener("click", (event) => {
  event.preventDefault();
  newTask.remove();
  })
})


