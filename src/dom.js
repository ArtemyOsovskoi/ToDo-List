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
    const projectValue = document.getElementById("projectInput").value;

    const newToDo = new ToDo(text, date, projectValue, importance);
    newToDo.createToDo();
    general.push(newToDo);

    let filteredProject = projects.filter(project => project.title === projectInput.value)[0];

    if (projectValue != "General" && projectValue === filteredProject.title) {
        filteredProject.arr.push(newToDo);
    }; 

    //DOM elements
    let todoContainer = document.createElement("div");
    let todoText = document.createElement("p");
    let todoDate = document.createElement("p");
    let todoImportance = document.createElement("p");
    let todoProject = document.createElement("p");

    todoContainer.id = newToDo.id;
    todoContainer.classList.add("todo-container");
    todoText.innerText = newToDo.text;
    todoDate.innerText = newToDo.date;
    todoImportance.innerText = "Important";
    if (projectValue == "General") {
        todoProject.style.visibility = "hidden";
    } else {
        todoProject.innerText = `Project: ${projectValue}`;
    }


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

            let changedTodo = general.find((todo) => todo.id == todoId);

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
    });

    //delete todo
    todoDeleteButton.addEventListener("click", (todo) => {
        deleteId = todo.currentTarget.parentNode.id;
        removeToDo(deleteId);
        todo.currentTarget.closest("div").remove();
    })
   });
}

let myProjectsHeader = document.getElementById("myProjects");
myProjectsHeader.style.visibility = "hidden";
let projectsCounter = document.getElementById("projectsCounter");

let newProject;
let linkId;
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
    projectContainer.classList.add("project-container");
    projectContainer.id = newProject.id;
    projectLink.classList.add("project-link");
    projectLink.innerText = newProject.title;
    projectLink.href = "javascript:void(0);";

    if (myProjectsHeader.style.visibility = "hidden") {myProjectsHeader.style.visibility = "visible";}
    
    projectsCounter.innerText = projects.length - 1;

    const projectsDataList = document.getElementById("projectsList");
    let option = document.createElement("option");
    option.id = newProject.id;
    option.value = newProject.title;
    option.innerText = option.value;
    projectsDataList.appendChild(option);

    projectLink.addEventListener("click", (project) => {
        //clean todo display
        while (mainDisplay.hasChildNodes()) {
            mainDisplay.removeChild(mainDisplay.firstChild);
        };
        //get which project is created
        linkId = project.currentTarget.parentNode.id;
        let linkProject = projects.find((project) => project.id == linkId);

        linkProject.arr.forEach(todo => {
        //todo DOM elements
            let todoContainer = document.createElement("div");
            let todoText = document.createElement("p");
            let todoDate = document.createElement("p");
            let todoImportance = document.createElement("p");
            let todoProject = document.createElement("p");

            todoContainer.id = todo.id;
            todoContainer.classList.add("todo-container");
            todoText.innerText = todo.text;
            todoDate.innerText = todo.date;
            todoImportance.innerText = "Important";
            if (todo.projectTitle == "General") {
                todoProject.style.visibility = "hidden";
            } else {
                todoProject.innerText = `Project: ${todo.projectTitle}`;
            };

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

            if (todo.importance === true) {
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

                    let changedTodo = general.find((todo) => todo.id == todoId);

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
            });

            //delete todo
            todoDeleteButton.addEventListener("click", (todo) => {
                deleteId = todo.currentTarget.parentNode.id;
                removeToDo(deleteId);
                todo.currentTarget.closest("div").remove();
            })
        });
    });

    let deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("delete-project-btn");
    deleteProjectButton.innerText = "Delete project";

    deleteProjectButton.addEventListener("click", (project) => {
        deleteProjectId = project.currentTarget.parentNode.id;
        const findProjectId = projects.find((project) => project.id == deleteProjectId);
        findProjectId.arr.forEach(todo => {
            let getTodoContainer = document.getElementById(todo.id);
            getTodoContainer.remove();
        });

        removeProject(deleteProjectId);
        projectsCounter.innerText = projects.length - 1;
        if (projectsCounter.innerText == 0) {
            myProjectsHeader.style.visibility = "hidden";
        };
        project.currentTarget.closest("div").remove();
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

        let getOptions = Array.from(projectsDataList.children);
        let changedOption = getOptions.find((option) => parseInt(option.id) == changeProjectId);
        changedOption.value = changedProject.title;
        changedOption.innerText = changedProject.title;

        //change todos project title which changed
        changedProject.arr.forEach(todo => {
            todo.projectTitle = changedProject.title;
        });

        let changedProjectTitle = changedProject.arr.find((todo) => todo.projectTitle == changedProject.title);
        let getTodoContainer = document.getElementById(changedProjectTitle.id);
        getTodoContainer.childNodes[3].innerText = changedProject.title;
   });

    const nav = document.getElementById("nav");
    projectContainer.appendChild(projectLink);
    projectContainer.appendChild(deleteProjectButton);
    projectContainer.appendChild(projectChangePopupButton);
    nav.appendChild(projectContainer);
  });
};

export function generalTodo() {
let generalToDo = document.getElementById("generalTodo");
    generalToDo.addEventListener("click", () => {
        while (mainDisplay.hasChildNodes()) {
            mainDisplay.removeChild(mainDisplay.firstChild);
        };
        general.forEach(todo => {
        //todo DOM elements
            let todoContainer = document.createElement("div");
            let todoText = document.createElement("p");
            let todoDate = document.createElement("p");
            let todoImportance = document.createElement("p");
            let todoProject = document.createElement("p");

            todoContainer.id = todo.id;
            todoContainer.classList.add("todo-container");
            todoText.innerText = todo.text;
            todoDate.innerText = todo.date;
            todoImportance.innerText = "Important";
            
            if (todo.projectTitle == "General") {
                todoProject.style.visibility = "hidden";
            } else {
                todoProject.innerText = `Project: ${todo.projectTitle}`;
            };

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

            if (todo.importance === true) {
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

                    let changedTodo = general.find((todo) => todo.id == todoId);

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
            });

            //delete todo
            todoDeleteButton.addEventListener("click", (todo) => {
                deleteId = todo.currentTarget.parentNode.id;
                removeToDo(deleteId);
                todo.currentTarget.closest("div").remove();
            })
        });
    });
};


export function todayTodo() {
    let todayTodoLink = document.getElementById("todayTodo");
    todayTodoLink.addEventListener("click", () => {
        while (mainDisplay.hasChildNodes()) {
            mainDisplay.removeChild(mainDisplay.firstChild);
        };
        const date = new Date().toDateString();
        const todaysTodo = general.filter((todo) => new Date(todo.date + "T00:00:00").toDateString() == date);
        todaysTodo.forEach(todo => {
                //todo DOM elements
            let todoContainer = document.createElement("div");
            let todoText = document.createElement("p");
            let todoDate = document.createElement("p");
            let todoImportance = document.createElement("p");
            let todoProject = document.createElement("p");

            todoContainer.id = todo.id;
            todoContainer.classList.add("todo-container");
            todoText.innerText = todo.text;
            todoDate.innerText = todo.date;
            todoImportance.innerText = "Important";
            
            if (todo.projectTitle == "General") {
                todoProject.style.visibility = "hidden";
            } else {
                todoProject.innerText = `Project: ${todo.projectTitle}`;
            };

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

            if (todo.importance === true) {
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

                    let changedTodo = general.find((todo) => todo.id == todoId);

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
            });

            //delete todo
            todoDeleteButton.addEventListener("click", (todo) => {
                deleteId = todo.currentTarget.parentNode.id;
                removeToDo(deleteId);
                todo.currentTarget.closest("div").remove();
            })
        });
    });
};