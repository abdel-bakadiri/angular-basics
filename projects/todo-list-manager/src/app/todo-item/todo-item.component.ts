import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem!: TodoModel;
  @Output() deleteTodoItem = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onDeleteTodoItem() {
    this.deleteTodoItem.emit(this.todoItem.id);
  }
}
