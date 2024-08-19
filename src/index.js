import addToDo, { closeDialog, dialogToDo, dialogProject, addProject, closeChangeDialog, closeProjectDialog, todayTodo, weeklyTodo, generalTodo, generalLocalStorage, projectsLocalStorage }  from "./dom.js";
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

//get items from localStorage on page load if it's not empty
if (localStorage.getItem("general")) {
        //fill general array with localstorage "general" objects
        let localStorageGeneral = JSON.parse(localStorage.getItem("general"));
        general.push(...localStorageGeneral);  
    //display dom
    generalLocalStorage();
};

if (localStorage.getItem("projects")) {
        //fill projects array
        let localStorageProjects = JSON.parse(localStorage.getItem("projects"));
        projects.push(...localStorageProjects);
    //display dom
    projectsLocalStorage();
};