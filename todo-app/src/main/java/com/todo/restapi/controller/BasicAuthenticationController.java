package com.todo.restapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.restapi.bean.AuthenticationBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {	
	
	@GetMapping("/basicauth")
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("Some error has happend.");
		return new AuthenticationBean("You are authenticated.");
	}
		
}
