import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username:string, id: number){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodos(username: string, id: number){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodos(username: string, id: number, todo: Todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }
  craeteTodos(username: string, todo: Todo){
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }
}
