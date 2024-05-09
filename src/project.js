export const defaultToDoArr = [
    {
        text: "call mom",
        date: "12-05-2024",
        importance: true
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