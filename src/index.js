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


//generalLocalStorage();