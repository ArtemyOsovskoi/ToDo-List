import addToDo, { closeDialog, dialogToDo, dialogProject }  from "./dom.js";
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

//close dialog window
closeDialog();

/* let firstNote = new ToDo();
firstNote.createToDo(); */
/* todoArr.push(firstNote);
console.log("note array", todoArr); */