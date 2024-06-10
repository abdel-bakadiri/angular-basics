import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss'],
})
export class AddNewItemComponent implements OnInit {
  name = '';
  description = '';
  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.todoService.addTodo(this.name, this.description);
      console.log('Form submitted', form);
    }
  }
}
