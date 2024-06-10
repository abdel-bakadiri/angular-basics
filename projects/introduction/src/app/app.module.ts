import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoItemComponent } from 'projects/todo-list-manager/src/app/todo-item/todo-item.component';
import { TodoListComponent } from 'projects/todo-list-manager/src/app/todo-list/todo-list.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
