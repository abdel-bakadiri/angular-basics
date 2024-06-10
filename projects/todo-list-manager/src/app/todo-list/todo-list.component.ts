import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoModel } from '../todo.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoModel[]> = of([]);

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todo$;
  }
  handleDeleteTodoItem(itemId: number) {
    if (itemId) {
      this.todoService.removeTodoById(itemId);
    }
  }
}
