import addToDo, { closeDialog, dialogToDo, dialogProject, addProject, closeDialogProject }  from "./dom.js";
import { defaultToDoArr }  from "./project.js";

console.log("index.js is working");
console.log("default array:", defaultToDoArr);


//show dialog window
dialogToDo();
//add new todo from todo window
addToDo();

//show project window
dialogProject();
//add new project from project window
addProject();

//close todo window
closeDialog();
//close project window
/* closeDialogProject(); */