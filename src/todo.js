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
  }
}
