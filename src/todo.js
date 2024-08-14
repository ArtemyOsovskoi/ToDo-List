import { projects } from "./project";

export const general = [];

let idCounter = 0;

export default class ToDo {
  constructor(text, date, projectTitle, importance, id) {
    this.text = text;
    this.date = date;
    this.projectTitle = projectTitle;
    this.importance = importance;
    this.id = id;
  }

  createToDo() {
    //take values from form input fields
    this.text = document.getElementById("text").value;
    this.date = document.getElementById("date").value;
    this.importance = document.getElementById("importance").checked;
    this.id = idCounter++;
  }
}

export function changeToDo(todoId) {
  //change in localstorage
  let localStorageGeneral = JSON.parse(localStorage.getItem("general"));
  let toChangeIdLS = localStorageGeneral.find((todo) => todo.id == todoId);
  toChangeIdLS.text = document.getElementById("textChange").value;
  toChangeIdLS.date = document.getElementById("dateChange").value;
  toChangeIdLS.importance = document.getElementById("importanceChange").checked;

  if (toChangeIdLS.projectTitle != "General") {
    let getProjectsLS = JSON.parse(localStorage.getItem("projects"));
    let toChangeIdProjectLS = getProjectsLS.find((project) =>
      project.arr.find((todo) => todo.id == todoId)
    );
    toChangeIdProjectLS.arr.text = document.getElementById("textChange").value;
    toChangeIdProjectLS.arr.date = document.getElementById("dateChange").value;
    toChangeIdProjectLS.arr.importance = document.getElementById("importanceChange").checked;
    localStorage.setItem("projects", JSON.stringify(getProjectsLS));
  }
  localStorage.setItem("general", JSON.stringify(localStorageGeneral));

  //change in general array
  let toChangeId = general.find((todo) => todo.id == todoId);
  //change current todo text, date and importance
  toChangeId.text = document.getElementById("textChange").value;
  toChangeId.date = document.getElementById("dateChange").value;
  toChangeId.importance = document.getElementById("importanceChange").checked;

  if (toChangeId.projectTitle != "General") {
    let toChangeIdProject = projects.find((project) =>
      project.arr.find((todo) => todo.id == todoId)
    );

    toChangeIdProject.arr.text = document.getElementById("textChange").value;
    toChangeIdProject.arr.date = document.getElementById("dateChange").value;
    toChangeIdProject.arr.importance =
      document.getElementById("importanceChange").checked;
  }
}

export function removeToDo(deleteId) {
  //remove from localstorage
  let localStorageGeneral = JSON.parse(localStorage.getItem("general"));
  let toRemoveTodoLS = localStorageGeneral.find((todo) => todo.id == deleteId);

  //remove from general array
  const toRemoveId = general.find((todo) => todo.id == deleteId);
  general.splice(general.indexOf(toRemoveId), 1);

  if (toRemoveId.projectTitle != "General") {
    //find a project with todo to delete it
    const toRemoveProjectId = projects.find((project) =>
      project.arr.find((todo) => todo.id == deleteId)
    );
    toRemoveProjectId.arr.splice(
      toRemoveProjectId.arr.indexOf(toRemoveProjectId),
      1
    );

    //remove from project's arr in localstorage
    let getProjectsLS = JSON.parse(localStorage.getItem("projects"));
    let toRemoveProjectLS = getProjectsLS.find((project) => project.arr.find((todo) => todo.id == deleteId));
    toRemoveProjectLS.arr.splice(toRemoveProjectLS.arr.indexOf(toRemoveProjectLS), 1);
    localStorage.setItem("projects", JSON.stringify(getProjectsLS));
  }
  localStorageGeneral.splice(localStorageGeneral.indexOf(toRemoveTodoLS), 1);
  localStorage.setItem("general", JSON.stringify(localStorageGeneral));
}
