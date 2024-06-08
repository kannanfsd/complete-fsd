import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

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
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldVariable(name: string) {
    // let basicAuth = this.createBasicAuthHeader();
    // console.log('BasicAuth--->'+basicAuth);
    // let headers = new HttpHeaders({
    //   Authorization: basicAuth
    // })
    // console.log('Headers--->'+headers);
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/path-variable/${name}`,
      //{headers}
    );
  }

  // createBasicAuthHeader() {
  //   let username = 'learning';
  //   let password = 'fsd@24';
  //   let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthString;
  // }

}
