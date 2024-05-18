import { Component, OnInit } from '@angular/core';
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


  //public SpringBootFirstWebApplication(){}
  constructor() {

  }
  //void init(){}
  ngOnInit(): void {

  }
}
