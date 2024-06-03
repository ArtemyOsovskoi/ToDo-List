export const defaultToDoArr = [];

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

/*   deleteToDo() {
    this.text = null;
    this.date = null;
    this.importance = null;
  } */
}

export function changeToDo(todoId) {
  let toChangeId = defaultToDoArr.find((todo) => todo.id == todoId);

  //change current todo text, date and importance
  toChangeId.text = document.getElementById("textChange").value;
  toChangeId.date = document.getElementById("dateChange").value;
  toChangeId.importance = document.getElementById("importanceChange").checked;

}

export function removeToDo(object) {
  /* defaultToDoArr.splice(defaultToDoArr.indexOf(object), 1); */
  defaultToDoArr.splice(defaultToDoArr.indexOf(object), 1);
/* items.splice(items.findIndex(i => i.id === "abc"), 1) */
}
