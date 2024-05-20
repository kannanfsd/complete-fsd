package com.todo.restapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.todo.restapi.bean.HelloBean;

@RestController
public class HelloWorldController {
	@GetMapping("/hello-world")
	public String helloWorld() {
		return "Hello world - Todo REST API";
	}
	
	@GetMapping("/hello-world-bean")
	public HelloBean helloWorldBean() {
		return new HelloBean("Hello world - Bean REST API");
	}
	
	@GetMapping("/hello-world-bean/path-variable/{name}")
	public HelloBean helloWorldBean(@PathVariable String name) {
		return new HelloBean(String.format("Hello world, %s",name));
	}
}
