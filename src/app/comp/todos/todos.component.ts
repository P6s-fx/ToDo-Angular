import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
// import test from 'node:test';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
// import { title } from 'process';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[];
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "Param",
        desc: "param desc",
        active: true
      },
      {
        sno: 2,
        title: "Suthar",
        desc: "Suthar-desc",
        active: true
      },
    ]
  }
}
