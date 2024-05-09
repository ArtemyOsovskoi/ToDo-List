import ToDo from "./todo.js";
import Project, { defaultToDoArr }  from "./project.js";

//new todo popup window
export function dialogToDo() {
    const showFormWindow = document.getElementById("formPopup");
    const dialog = document.getElementById("dialog");
    showFormWindow.addEventListener("click", () => {
    dialog.showModal();
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


//add new todo
export default function addToDo() {
  const todoButton = document.getElementById("todoButton");

  todoButton.addEventListener("click", () => {
    const newToDo = new ToDo(text, date, importance);
    newToDo.createToDo();
    defaultToDoArr.push(newToDo);
    console.log("new todo:", newToDo);
    console.log("added in:", defaultToDoArr);
  });
}

/* export function addProject() {
    const projectButton = document.getElementById("projectButton");
    let newProject = new Project();

    projectButton.addEventListener("click", ()=> {
        newProject.createProject();
        console.log(newProject);
    })
} */

//add new project
export function addProject() {
  const projectButton = document.getElementById("projectButton");

  projectButton.addEventListener("click", () => {
    const newProject = new Project(title, description);
    newProject.createProject();

    console.log("new project is made:", newProject);
  });
}

//close popup project
/* export function closeDialogProject() {
    const closeProjectButton = document.getElementById("closeProjectButton");
    closeProjectButton.addEventListener("click", () => {
        console.log("close project");
        dialog.close();
    });
}
 */












//опциональный вариант ввода через строку
/* export default function addToDo() {
    textInput.addEventListener("keypress", (e) => {

        console.log(textInput.value);
    })
//нужно вводимый текст вставлять как this.text класса
} */
