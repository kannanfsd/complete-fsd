import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  todos = [
    {id: 1, description: 'Learn to Python'},
    {id: 2, description: 'Become an expert an angular'},
    {id: 3, description: 'Planned to GCP certificate'},
  ]
  todo = {
    id: 1,
    description: 'Dance'
  };
  constructor() {}
}
