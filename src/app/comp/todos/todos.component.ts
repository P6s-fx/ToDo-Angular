import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
// import test from 'node:test';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
// import { title } from 'process';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[];
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "Task 1",
        desc: "Book reading",
        active: true
      },
      {
        sno: 2,
        title: "Task 2",
        desc: "Dsa Practice",
        active: true
      },
    ]
  }
  
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }
}