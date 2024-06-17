import ToDo, { changeToDo, general, removeToDo } from "./todo.js";
import Project, { changeProject, projects, removeProject }  from "./project.js";


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

/* export function dialogChangeProject() {
    const showChangeProjectWindow = document.getElementById("popupChangeProject");
    const dialogProjectChange = document.getElementById("dialogChangeProject");
    showChangeProjectWindow.addEventListener("click", () => {
        dialogProjectChange.showModal();
    });
} */

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

//making it global 
let todoId;
let deleteId;
let deleteProjectId;
let changeProjectId;
const mainDisplay = document.getElementById("mainDisplay");

//add new todo
export default function addToDo() {
  const todoButton = document.getElementById("todoButton");

  todoButton.addEventListener("click", () => {
    const newToDo = new ToDo(text, date, importance);
    newToDo.createToDo();
    general.push(newToDo);

    //general arr push (general)
    let projectInput = document.getElementById("projectInput");
    let filteredProject = projects.filter(project => project.title === projectInput.value)[0];

    if (projectInput.value != "General" && projectInput.value === filteredProject.title) {
        filteredProject.arr.push(newToDo);
        console.log("added todo in Project", filteredProject, projects);
    }; 

    //DOM elements
    let todoContainer = document.createElement("div");
    let todoText = document.createElement("p");
    let todoDate = document.createElement("p");
    let todoImportance = document.createElement("p");
    let todoProject = document.createElement("p");

    todoContainer.id = newToDo.id;
    todoText.innerText = newToDo.text;
    todoDate.innerText = newToDo.date;
    todoImportance.innerText = "Important";
    todoProject.innerText = `Project: ${projectInput.value}`;

    let todoChangeButton = document.createElement("input");
    todoChangeButton.type = "submit";
    todoChangeButton.id = "formPopupChange";
    todoChangeButton.value = "Change";

    let todoDeleteButton = document.createElement("button");
    todoDeleteButton.id = "deleteToDo";
    todoDeleteButton.textContent = "Delete"
    todoContainer.appendChild(todoText);
    todoContainer.appendChild(todoDate);
    todoContainer.appendChild(todoImportance);
    todoContainer.appendChild(todoProject);

    if (newToDo.importance === true) {
        todoImportance.style.visibility = "visible";
    } else {
        todoImportance.style.visibility = "hidden";
    }

    todoContainer.appendChild(todoChangeButton);
    todoContainer.appendChild(todoDeleteButton);
    mainDisplay.appendChild(todoContainer);

    //change todo
    const dialogChange = document.getElementById("dialogChange");
        todoChangeButton.addEventListener("click", (todo) => {
            dialogChange.showModal();
            //get id of clicked todo
            todoId = todo.currentTarget.parentNode.id;
        });

    const changeToDoButton = document.getElementById("todoChangeButton");
        changeToDoButton.addEventListener("click", () => {
            changeToDo(todoId);
            //changeToDoProject(todoId);

            let changedTodo = general.find((todo) => todo.id == todoId);
            //let changedTodoProject = newProject.arr.find((todo) => todo.id == todoId);

            let changedContainer = document.getElementById(todoId);           
            let changedText = changedContainer.childNodes[0];
            let changedDate = changedContainer.childNodes[1];
            let changedImportance = changedContainer.childNodes[2];

            changedText.innerText = changedTodo.text;
            changedDate.innerText = changedTodo.date;

            //changedText.innerText = changedTodoProject.text;
            //changedDate.innerText = changedTodoProject.date;


            if (changedTodo.importance === true) {
                changedImportance.style.visibility = "visible";
            } else {
                changedImportance.style.visibility = "hidden";
            };


/*             if (changedTodoProject.importance === true) {
                changedImportance.style.visibility = "visible";
            } else {
                changedImportance.style.visibility = "hidden";
            }; */

            console.log(`changed todo with id ${todoId}`, changedTodo,
            "in", general);
    
/*             console.log(`changed todo with id ${todoId}`, changedTodoProject,
            "in", newProject); */
    });

    //delete todo
    todoDeleteButton.addEventListener("click", (todo) => {
        deleteId = todo.currentTarget.parentNode.id;
        removeToDo(deleteId);
        todo.currentTarget.closest("div").remove();
        console.log(`deleted todo with id ${deleteId} in`, general);
    })
    
    console.log("added new todo:", newToDo, "in", general);
   });
}

let newProject;
//add new project
export function addProject() {
  const projectButton = document.getElementById("projectButton")

  projectButton.addEventListener("click", () => {
    newProject = new Project(title);
    newProject.createProject();
    projects.push(newProject);

    //DOM
    let projectContainer = document.createElement("div");
    let projectLink = document.createElement("a");
    projectContainer.classList.add = "project-container";
    projectContainer.id = newProject.id;
    projectLink.classList.add = "project-link";
    projectLink.innerText = newProject.title;
    projectLink.href = "javascript:void(0);";

    const projectsDataList = document.getElementById("projectsList");
    let option = document.createElement("option");
    option.innerText = newProject.title;
    projectsDataList.appendChild(option);


    let deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add = "delete-project-btn";
    deleteProjectButton.innerText = "Delete project";

    deleteProjectButton.addEventListener("click", (project) => {
        deleteProjectId = project.currentTarget.parentNode.id;
        removeProject(deleteProjectId);
        project.currentTarget.closest("div").remove();
        console.log("deleted project with ID", deleteProjectId, projects);
    });

    const projectChangePopupButton = document.createElement("button");
    projectChangePopupButton.id = "projectChangePopupButton";
    projectChangePopupButton.innerText = "Change project";

    const dialogProjectChange = document.getElementById("dialogChangeProject");
    projectChangePopupButton.addEventListener("click", (project) => {
        dialogProjectChange.showModal();
        changeProjectId = project.currentTarget.parentNode.id;
    });

    const changeProjectButton = document.getElementById("projectChangeButton");
    changeProjectButton.addEventListener("click", () => {
        changeProject(changeProjectId);
        let changedProject = projects.find((project) => project.id == changeProjectId);
        let changedProjectContainer = document.getElementById(changeProjectId);
        let changedTitle = changedProjectContainer.childNodes[0];
        changedTitle.innerText = changedProject.title;

        console.log(`updated project with id ${changeProjectId}`, projects);
   });

    const nav = document.getElementById("nav");
    //nav.appendChild(projectLink);
    projectContainer.appendChild(projectLink);
    projectContainer.appendChild(deleteProjectButton);
    projectContainer.appendChild(projectChangePopupButton);
    nav.appendChild(projectContainer);
    //wipe display and let create new todo inside new project

    console.log("new project is made:", newProject,"in:", projects);  
  });
};