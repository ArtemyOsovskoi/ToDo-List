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

//making it global to use inside addTodo and deleteToDO function
let todoId;
let deleteId;

//add new todo
export default function addToDo() {
  const todoButton = document.getElementById("todoButton");

  todoButton.addEventListener("click", () => {
    const newToDo = new ToDo(text, date, importance);
    newToDo.createToDo();
    defaultToDoArr.push(newToDo);

    //DOM elements
    const mainDisplay = document.getElementById("mainDisplay");
    let todoContainer = document.createElement("div");
    let todoText = document.createElement("p");
    let todoDate = document.createElement("p");
    let todoImportance = document.createElement("p");

    todoContainer.id = newToDo.id;
    todoText.innerText = newToDo.text;
    todoDate.innerText = newToDo.date;
    todoImportance.innerText = "Important";

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
            let changedTodo = defaultToDoArr.find((todo) => todo.id == todoId);
            let changedContainer = document.getElementById(todoId);           
            let changedText = changedContainer.childNodes[0];
            let changedDate = changedContainer.childNodes[1];
            let changedImportance = changedContainer.childNodes[2];

            changedText.innerText = changedTodo.text;
            changedDate.innerText = changedTodo.date;

            if (changedTodo.importance === true) {
                changedImportance.style.visibility = "visible";
            } else {
                changedImportance.style.visibility = "hidden";
            };

            console.log(`changed todo with id ${todoId}`, changedTodo,
            "in", defaultToDoArr);  
    });

    //delete todo
    //const deleteToDoButton = document.getElementById("deleteToDo");
    todoDeleteButton.addEventListener("click", (todo) => {
        deleteId = todo.currentTarget.parentNode.id;
        removeToDo(deleteId);
        todo.currentTarget.closest("div").remove();
        console.log(`deleted todo with id ${deleteId} in`, defaultToDoArr);
    })
    
    console.log("added new todo:", newToDo, "in", defaultToDoArr);
   });
}


/* export function deleteToDo() {

}  */ 

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
