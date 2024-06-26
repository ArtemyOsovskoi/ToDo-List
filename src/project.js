import { general } from "./todo";

export const projects = [
        {
        title: "default project",
        id: 0,
        arr: [],
        },
];

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
  const toRemoveProjectId = projects.find((project) => project.id == projectId);
  let filterGeneral = general.filter((todo) => todo.projectTitle != toRemoveProjectId.title);
  general.length = 0;
  general.push.apply(general, filterGeneral);
  projects.splice(projects.indexOf(toRemoveProjectId), 1);
};