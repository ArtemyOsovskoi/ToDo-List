export const projects = [
        {
        title: "default project",
        id: 0,
        arr: [],
        },
];

let projectIdCounter = 1;

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

export function changeProject(project) {
  project.title = document.getElementById("titleChange").value;
  project.description = document.getElementById("descriptionChange").value;
    //id stays the same
}

export function removeProject(project) {
  projects.splice(projects.indexOf(project), 1);
}


