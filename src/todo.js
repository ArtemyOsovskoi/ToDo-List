export const defaultToDoArr = [
    {
        text: "default todo text",
        date: "12-05-2024",
        importance: true,
    },
];

let idCounter = 0;

export default class ToDo {
  constructor(text, date, importance, id) {
    this.text = text;
    this.date = date;
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

  doneToDo() {
    //set todo as done - same as delete basically?
  }

  deleteToDo() {
    this.text = null;
    this.date = null;
    this.importance = null;
  }
}


export function changeToDo(object) {
    //change current todo text, date and importance
  object.text = document.getElementById("textChange").value;
  object.date = document.getElementById("dateChange").value;
  object.importance = document.getElementById("importanceChange").checked;
    //id stays the same
}

