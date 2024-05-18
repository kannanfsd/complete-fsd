import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  todos = [
    new Todo(1, 'Learn to Python', false, new Date()),
    new Todo(1, 'Become an expert an angular', false, new Date()),
    new Todo(1, 'Planned to GCP certificate', false, new Date()),
    new Todo(1, 'Learn to singing', false, new Date()),
  ]
  todo = {
    id: 1,
    description: 'Dance'
  };
  constructor() {}
}