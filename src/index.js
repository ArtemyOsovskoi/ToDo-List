import addToDo, { closeDialog, dialogToDo, dialogProject, addProject, closeChangeDialog, closeProjectDialog, todayTodo, weeklyTodo, generalTodo, generalLocalStorage }  from "./dom.js";
import { projects }  from "./project.js";
import { general } from "./todo.js";
import "./style.css";

console.log("default projects array:", projects);
console.log("general todo array:", general);
dialogToDo();
addToDo();
todayTodo();
generalTodo();

closeChangeDialog();
dialogProject();
addProject();
closeProjectDialog();

closeDialog();

//get items from localStorage on page load
if (localStorage.getItem("general")) {
    generalLocalStorage();
}

//generalLocalStorage();
/* function showSavedToDos() {
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
        const newTask = document.createElement('li');
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove Task';
        newTask.innerText = localStorage.getItem(keys[i]);
        newTask.appendChild(removeBtn);
        taskList.appendChild(newTask);
    }
}
showSavedToDos(); */