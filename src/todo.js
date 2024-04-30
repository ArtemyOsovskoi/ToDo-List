//single todo note module
export const todoArr = [];

export default class ToDo {
  constructor(text, date, importance) {
    this.text = text;
    this.date = date;
    this.importance = importance;
  }

  createToDo() {
    this.text = prompt("text");
    this.date = prompt("date");
    this.importance = prompt("importance");

/*     console.log(` ToDo: 
        text: ${this.text} 
        date: ${this.date}
        importance: ${this.importance}`); */
  }

/*   todoArray() {
    todoArr.push(this.text, this.date, this.importance);

    console.log(todoArr);
  } */
}





