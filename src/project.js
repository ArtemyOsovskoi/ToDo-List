export const projects = [
    [
        {
        title: "default project",
        description: "just a default testing project",
        }
    ],
];

let projectIdCounter = 0;

export default class Project {
    constructor(title, description, id, arr) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.arr = arr;
    }

    createProject() {
        this.title = document.getElementById("title").value;
        this.description = document.getElementById("description").value;
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


