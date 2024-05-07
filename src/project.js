export const defaultToDoArr = [
    {
        "text": "default text",
        "date": 12,
        "importance": true
    },
];

export default class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    createProject() {
        let project = [];
        return project;
    }
}