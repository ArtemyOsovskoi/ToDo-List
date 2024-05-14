export const projects = [
    {
        title: "default project",
        description: "just a default testing project",
    },
];

export default class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    createProject() {
        this.title = document.getElementById("title").value;
        this.description = document.getElementById("description").value;
    }
}