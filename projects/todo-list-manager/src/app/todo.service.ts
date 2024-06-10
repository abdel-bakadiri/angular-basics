import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoModel } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly initalTodos: TodoModel[] = [
    {
      id: 1,
      name: 'Angular session study',
      description:
        'In this session I will master the component architecture, immutability and state management',
      completed: false,
    },
    {
      id: 2,
      name: 'Read the power of now book',
      description: `let's have some timme to emerge in the world of spirituality`,
      completed: false,
    },
    {
      id: 3,
      name: 'Talk to my family',
      description: 'A family time to talk 😍',
      completed: false,
    },
  ];
  private readonly _todos = new BehaviorSubject<TodoModel[]>(this.initalTodos);
  public todo$ = this._todos.asObservable();
  private get todos(): TodoModel[] {
    return this._todos.getValue();
  }
  private set todos(items: TodoModel[]) {
    this._todos.next(items);
  }

  public addTodo(name: string, description: string) {
    try {
      const newItem: TodoModel = {
        id: this.todos.length + 1,
        name: name,
        description: description,
        completed: false,
      };
      this.todos = [...this.todos, newItem];
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }
  public toggleTodo(id: number): void {
    try {
      this.todos = this.todos.map((todo: TodoModel) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    } catch (error) {
      console.error('Error toggle todo ', error);
    }
  }

  public removeTodoById(id: number): void {
    try {
      this.todos = this.todos.filter((todo: TodoModel) => todo.id !== id);
    } catch (error) {
      console.error('Error remove todo', error);
    }
  }

  constructor() {}
}
