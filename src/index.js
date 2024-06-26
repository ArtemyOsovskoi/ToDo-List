import addToDo, { closeDialog, dialogToDo, dialogProject, addProject, closeChangeDialog, closeProjectDialog, todayTodo, weeklyTodo }  from "./dom.js";
import { projects }  from "./project.js";
import { general } from "./todo.js";

console.log("index.js is working");
console.log("default projects array:", projects);
console.log("general todo array:", general);
dialogToDo();
addToDo();
todayTodo();

closeChangeDialog();
dialogProject();
addProject();
closeProjectDialog();

closeDialog();