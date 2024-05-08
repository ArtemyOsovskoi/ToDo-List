
export default class ToDo {
  constructor(text, date, importance) {
    this.text = text;
    this.date = date;
    this.importance = importance;
  }

  createToDo() {
/*     this.text = prompt("enter text");
    this.date = prompt("enter date");
    this.importance = prompt("choose importance"); */
  //take values from form input fields
  this.text = document.getElementById("text").value;
  this.date = document.getElementById("date").value;
  this.importance = document.getElementById("importance").value;
  }

  changeToDo() {
    //change current todo text, date and importance
    this.text = prompt("enter new text");
    this.date = prompt("enter new date");
    this.importance = prompt("choose importance");
  }

  doneToDo() {
    //set todo as done

  }

  deleteToDo() {
    this.text = null;
    this.date = null;
    this.importance = null;
  }
}
