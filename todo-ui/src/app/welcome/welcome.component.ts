import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//@ComponentScan(value="com.learn.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
//public class SpringBootFirstWebApplication extends
export class WelcomeComponent implements OnInit{
  //String message = "welcome message";
  message = 'welcome message';
  name = '';
  welcomeMessage = '';
  //public SpringBootFirstWebApplication(){}
  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {

  }
  //void init(){}
  ngOnInit(): void {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
    console.log(this.name);
  }

  getMessage() {
    //console.log("ready to call welcome api.");
    this.service.executeHelloWorld().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getMessageWithParam() {
    this.service.executeHelloWorldVariable(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessResponse(response: any) {
    console.log(response);
    this.welcomeMessage = response.message;
    console.log(this.welcomeMessage);
  }

  handleErrorResponse(error: any) {
    console.log(error.error.message);
    this.welcomeMessage = error.error.message;
  }

}
