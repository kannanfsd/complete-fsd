import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  //public SpringBootFirstWebApplication(){}
  //ActivatedRoute
  constructor(private route: ActivatedRoute) {

  }
  //void init(){}
  ngOnInit(): void {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
    console.log(this.name);
  }
}
