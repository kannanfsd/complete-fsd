import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

//Future
// -No Navigation Menu and Footer
// -Formatting - adding bootstrap
// -No security for menus
// -hardcoded logic in the todoList & login components
// -Remaining functionality - Edit, Delete, Add
// -Spring Security

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
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  message: string = '';
  // [
  //   new Todo(1, 'Learn to Python', false, new Date()),
  //   new Todo(1, 'Become an expert an angular', false, new Date()),
  //   new Todo(1, 'Planned to GCP certificate', false, new Date()),
  //   new Todo(1, 'Learn to singing', false, new Date()),
  // ]
  // todo = {
  //   id: 1,
  //   description: 'Dance'
  // };
  constructor(
    private service: TodoDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.refreshTodo();
  }
  refreshTodo() {
    this.service.retrieveAllTodos('jack').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id: number) {
    console.log(`call delete method -> ID: ${id}`);
    this.service.deleteTodo('jack',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful.`;
        this.refreshTodo();
      }
    )
  }

  updateTodo(id: number) {
    console.log(`call update method -> ID: ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos',-1]);
  }
}
