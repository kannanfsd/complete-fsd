package com.todo.restapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.todo.restapi.bean.HelloBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
	@GetMapping("/hello-world")
	public String helloWorld() {
		return "Hello world - Todo REST API";
	}
	
	@GetMapping("/hello-world-bean")
	public HelloBean helloWorldBean() {
		//throw new RuntimeException("Some error has happend.");
		return new HelloBean("Hello world - Changed.");
	}
	
	@GetMapping("/hello-world-bean/path-variable/{name}")
	public HelloBean helloWorldBean(@PathVariable String name) {
		return new HelloBean(String.format("Hello world, %s",name));
	}
}
