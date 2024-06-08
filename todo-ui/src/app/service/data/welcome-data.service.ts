import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorld() {
    return this.http.get<HelloWorldBean>('http://localhost:8090/hello-world-bean');
  }

  executeHelloWorldVariable(name: string) {
    let basicAuth = this.createBasicAuthHeader();
    console.log('BasicAuth--->'+basicAuth);
    let headers = new HttpHeaders({
      Authorization: basicAuth
    })
    console.log('Headers--->'+headers);
    return this.http.get<HelloWorldBean>(`http://localhost:8090/hello-world-bean/path-variable/${name}`,
      {headers}
    );
  }

  createBasicAuthHeader() {
    let username = 'learning';
    let password = 'fsd@24';
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthString;
  }

}
