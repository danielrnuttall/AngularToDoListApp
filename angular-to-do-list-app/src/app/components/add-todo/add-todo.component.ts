import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addToDo: EventEmitter<any> = new EventEmitter();

  title:string
  constructor() { }

  ngOnInit(){
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }
  }

}
