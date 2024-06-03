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

//making it global to use inside addTodo function
let todoId;

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
    todoContainer.id = newToDo.id;
    todoContainer.textContent = `${newToDo.text} date:${newToDo.date}`;
    if (newToDo.importance === true) {
        todoContainer.textContent = `${newToDo.text} date:${newToDo.date} important`;
    };
    //change todo
    let todoChangeButton = document.createElement("input");
    todoChangeButton.type = "submit";
    todoChangeButton.id = "formPopupChange";
    todoChangeButton.value = "Change";

    todoContainer.appendChild(todoChangeButton);
    mainDisplay.appendChild(todoContainer);



    const dialogChange = document.getElementById("dialogChange");
        todoChangeButton.addEventListener("click", (todo) => {
            dialogChange.showModal();
            //get id of clicked todo
            todoId = todo.currentTarget.parentNode.id;
        });

    const changeToDoButton = document.getElementById("todoChangeButton");
        changeToDoButton.addEventListener("click", () => {
  
            //pass object with that id to change todo func
            changeToDo(todoId);
            let changedTodo = defaultToDoArr.find((todo) => todo.id == todoId);
            let changedContainer = document.getElementById(todoId);           

            changedContainer.textContent = `${changedTodo.text} date:${changedTodo.date}`;
            if (changedTodo.importance === true) {
                changedContainer.textContent = `${changedTodo.text} date:${changedTodo.date} important`;
            };
            //keep change button
            /* changedContainer.appendChild(todoChangeButton);
            todoContainer.appendChild(todoChangeButton);
            mainDisplay.appendChild(todoContainer);
            mainDisplay.appendChild(changedContainer); */

            console.log(`changed todo with id ${todoId}`, changedTodo,
            "in", defaultToDoArr);  
    });

    //testing pushing into a project with id 0
/*     let projectId = projects.find((project) => project.id == 0);
    projectId.arr.push(newToDo); */
    
    console.log("added new todo:", newToDo, "in", defaultToDoArr);
   });
}

/* export function updateToDo() {
    const changeToDoButton = document.getElementById("todoChangeButton");

    changeToDoButton.addEventListener("click", () => {
        changeToDo(todo);
        //const toChangeId = defaultToDoArr.find((todo) => todo.id == 1);
        //changeToDo(todo); 
        todoContainer.textContent = `${todo.text} date:${todo.date}`;
        if (todo.importance === true) {
            todoContainer.textContent = `${todo.text} date:${todo.date} important`;;
        };

        todoContainer.appendChild(todoChangeButton);
        console.log(`changed todo with id ${defaultToDoArr[i].id}`, defaultToDoArr[i], 
        "in", defaultToDoArr);
   });
} */


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
