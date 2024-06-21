import addToDo, { closeDialog, dialogToDo, dialogProject, addProject, closeChangeDialog, closeProjectDialog, displayToDo, navigation, projectvalue }  from "./dom.js";
import { projects }  from "./project.js";
import { general } from "./todo.js";
//import { defaultToDoArr } from "./todo.js";

console.log("index.js is working");
console.log("default projects array:", projects);
console.log("general todo array:", general);
//show dialog window
dialogToDo();
addToDo();

closeChangeDialog();

//show project window
dialogProject();
addProject();
closeProjectDialog();
//dialogChangeProject();
//changeProject();
//deleteProject();
//close todo window
closeDialog();

//displayToDo();
//navigation();


