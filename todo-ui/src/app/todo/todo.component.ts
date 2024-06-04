import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = 0;
  todo: Todo = {
    id: -1,
    description: '',
    done: false,
    targetDate: new Date
  };
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id != -1) {
      this.todoService.retrieveTodos('jack', this.id).subscribe(
        data => this.todo = data
      )
    }
  }
  saveTodo() {
    if(this.id === -1) {
      //create todo
      this.todoService.craeteTodos('jack', this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoService.updateTodos('jack', this.id, this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
