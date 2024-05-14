import addToDo, { closeDialog, dialogToDo, dialogProject, addProject, deleteToDo, updateToDo, dialogChangeToDo, closeChangeDialog, closeProjectDialog }  from "./dom.js";
import { projects }  from "./project.js";
import { defaultToDoArr } from "./todo.js";

console.log("index.js is working");
console.log("default projects array:", projects);
console.log("default todo array:", defaultToDoArr);

//show dialog window
dialogToDo();
addToDo();
deleteToDo();

dialogChangeToDo();
updateToDo();
closeChangeDialog();

//show project window
dialogProject();
addProject();
closeProjectDialog();
//close todo window
closeDialog();
