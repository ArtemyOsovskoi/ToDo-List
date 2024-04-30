import ToDo, { todoArr } from "./todo.js";

console.log("index js is working");

let firstNote = new ToDo();
firstNote.createToDo();
todoArr.push(firstNote);
console.log(firstNote);
console.log(todoArr);

let secondNote = new ToDo();
secondNote.createToDo();
todoArr.push(secondNote);
console.log(secondNote);
console.log(todoArr);