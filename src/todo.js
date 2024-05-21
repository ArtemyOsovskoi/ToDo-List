export const defaultToDoArr = [
    {
        text: "1st text",
        date: "12-05-2024",
        importance: true,
        id: 0,
    },
    {
        text: "2nd text",
        date: "17-05-2024",
        importance: true,
        id: 1,
    },
    {
        text: "3rd text",
        date: "02-05-2024",
        importance: false,
        id: 2,
    },
];

let idCounter = 3;

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

/*   deleteToDo() {
    this.text = null;
    this.date = null;
    this.importance = null;
  } */
}


export function changeToDo(object) {
    //change current todo text, date and importance
  object.text = document.getElementById("textChange").value;
  object.date = document.getElementById("dateChange").value;
  object.importance = document.getElementById("importanceChange").checked;
    //id stays the same
}

export function removeToDo(object) {
  /* defaultToDoArr.splice(defaultToDoArr.indexOf(object), 1); */
  defaultToDoArr.splice(defaultToDoArr.indexOf(object), 1);
/* items.splice(items.findIndex(i => i.id === "abc"), 1) */
}
