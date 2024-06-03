import addToDo, { closeDialog, dialogToDo, dialogProject, addProject, deleteToDo, updateToDo, closeChangeDialog, closeProjectDialog, changeProject, dialogChangeProject, deleteProject }  from "./dom.js";
import { projects }  from "./project.js";
import { defaultToDoArr } from "./todo.js";

console.log("index.js is working");
console.log("default projects array:", projects);
console.log("default todo array:", defaultToDoArr);

//show dialog window
dialogToDo();
addToDo();
deleteToDo();

/* updateToDo();
 */closeChangeDialog();

//show project window
dialogProject();
addProject();
closeProjectDialog();
dialogChangeProject();
changeProject();
deleteProject();
//close todo window
closeDialog();
