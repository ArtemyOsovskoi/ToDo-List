import { general } from "./todo";

export const projects = [];

let projectIdCounter = 99;

export default class Project {
  constructor(title, id, arr) {
    this.title = title;
    this.id = id;
    this.arr = arr;
  }

  createProject() {
    this.title = document.getElementById("title").value;
    this.id = projectIdCounter++;
    this.arr = [];
  }
}

export function changeProject(projectId) {
  let toChangeIdProject = projects.find((project) => project.id == projectId);
  toChangeIdProject.title = document.getElementById("titleChange").value;
}

export function removeProject(projectId) {
  //remove from local storage
  let localStorageProjects = JSON.parse(localStorage.getItem("projects"));
  let toRemoveProjectLS = localStorageProjects.find((project) => project.id == projectId);
  localStorageProjects.splice(localStorageProjects.indexOf(toRemoveProjectLS), 1);
  localStorage.setItem("projects", JSON.stringify(localStorageProjects));

  //remove from projects array
  const toRemoveProjectId = projects.find((project) => project.id == projectId);
  let filterGeneral = general.filter(
    (todo) => todo.projectTitle != toRemoveProjectId.title
  );
  general.length = 0;
  general.push.apply(general, filterGeneral);
  projects.splice(projects.indexOf(toRemoveProjectId), 1);
}
