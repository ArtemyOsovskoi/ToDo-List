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
  //let toChangeIdProject = projects.find(project => project.arr.find(todo => todo.id == todoId));
  toChangeIdProject.title = document.getElementById("titleChange").value;
}

export function removeProject(projectId) {
  const toRemoveProjectId = projects.find((project) => project.id == projectId);
  projects.splice(projects.indexOf(toRemoveProjectId), 1);
};


