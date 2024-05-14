import ToDo, { changeToDo, defaultToDoArr } from "./todo.js";
import Project, { projects }  from "./project.js";

//new todo popup window
export function dialogToDo() {
    const showFormWindow = document.getElementById("formPopup");
    const dialog = document.getElementById("dialog");
    showFormWindow.addEventListener("click", () => {
    dialog.showModal();
    });
}

export function dialogChangeToDo() {
    const showChangeWindow = document.getElementById("formPopupChange");
    const dialogChange = document.getElementById("dialogChange");
    showChangeWindow.addEventListener("click", () => {
        dialogChange.showModal();
    });
}

//new project popup window
export function dialogProject() {
    const showFormProjectWindow = document.getElementById("formProjectPopup");
    const dialogProject = document.getElementById("dialogProject");
    showFormProjectWindow.addEventListener("click", () => {
    dialogProject.showModal();
    });
}


//close popup todo
export function closeDialog() {
    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", () => {
        dialog.close();
    });
}

//close popup change todo
export function closeChangeDialog() {
    const closeChangeButton = document.getElementById("closeChangeButton");
    closeChangeButton.addEventListener("click", () => {
        dialogChange.close();
    });
}

//close popup project todo
export function closeProjectDialog() {
    const closeProjectButton = document.getElementById("closeProjectButton");
    closeProjectButton.addEventListener("click", () => {
        dialogProject.close();
    });
}

//add new todo
export default function addToDo() {
  const todoButton = document.getElementById("todoButton");

  todoButton.addEventListener("click", () => {
    const newToDo = new ToDo(text, date, importance);
    newToDo.createToDo();
    defaultToDoArr.push(newToDo);
    console.log("added new todo:", newToDo);
    console.log("in:", defaultToDoArr);
  });
}

export function deleteToDo() {
    const deleteToDoButton = document.getElementById("deleteToDo");

    deleteToDoButton.addEventListener("click", () => {
        defaultToDoArr.pop();
        console.log("deleted last todo", defaultToDoArr);
    })
}

export function updateToDo() {
    const changeToDoButton = document.getElementById("todoChangeButton");

    changeToDoButton.addEventListener("click", () => {
        const todoId = defaultToDoArr.find((todo) => todo.id == 0);
        changeToDo(todoId);
        console.log("todo is changed", todoId);
        console.log("updated array", defaultToDoArr);
   });
}

//add new project
export function addProject() {
  const projectButton = document.getElementById("projectButton");

  projectButton.addEventListener("click", () => {
    const newProject = new Project(title, description);
    newProject.createProject();
    projects.push(newProject);
    console.log("new project is made:", newProject);
    console.log("projects:", projects);
  });
}

