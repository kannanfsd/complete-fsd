package com.todo.restapi.bean;

public class AuthenticationBean {
	private String message;
		
	public AuthenticationBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AuthenticationBean(String message) {		
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Status: [message=" + message + "]";
	}	
	
}
