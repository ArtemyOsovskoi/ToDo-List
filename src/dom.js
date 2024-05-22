import ToDo, { changeToDo, defaultToDoArr, removeToDo } from "./todo.js";
import Project, { projects, removeProject }  from "./project.js";


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

export function dialogChangeProject() {
    const showChangeProjectWindow = document.getElementById("popupChangeProject");
    const dialogProjectChange = document.getElementById("dialogChangeProject");
    showChangeProjectWindow.addEventListener("click", () => {
        dialogProjectChange.showModal();
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

export function closeChangeProjectDialog() {
    const closeChangeProjectButton = document.getElementById("closeProjectChangeButton");
    closeChangeProjectButton.addEventListener("click", () => {
        dialogProjectChange.close();
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


export function updateToDo() {
    const changeToDoButton = document.getElementById("todoChangeButton");

    changeToDoButton.addEventListener("click", () => {
        const toChangeId = defaultToDoArr.find((todo) => todo.id == 1);
        changeToDo(toChangeId);
        console.log(`changed todo with id ${toChangeId.id}`, toChangeId);
        console.log("todo default array", defaultToDoArr);
   });
}

export function deleteToDo() {
    const deleteToDoButton = document.getElementById("deleteToDo");

    deleteToDoButton.addEventListener("click", () => {
        const toRemoveId = defaultToDoArr.find((todo) => todo.id == 3);
        removeToDo(toRemoveId);
        console.log(`deleted todo with id ${toRemoveId.id}`, defaultToDoArr);
    })
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

export function changeProject() {
    const changeProjectButton = document.getElementById("projectChangeButton");

    changeProjectButton.addEventListener("click", () => {
        const toChangeProjectId = projects.find((project) => project.id == 0);
        changeProject(toChangeProjectId);
        console.log(`updated project with id ${toChangeProjectId.id}`, toChangeProjectId);
        console.log("projects array", projects);
   });
}

export function deleteProject() {
    const deleteProjectButton = document.getElementById("deleteProject");

    deleteProjectButton.addEventListener("click", () => {
        const toRemoveProjectId = projects.find((project) => project.id == 0);
        removeProject(toRemoveProjectId);
        console.log(`deleted project with id ${toRemoveProjectId.id}`, projects);
    })
} 
