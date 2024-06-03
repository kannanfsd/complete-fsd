package com.todo.restapi.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.todo.restapi.bean.Todo;
@Service
public class TodoHardcodedService {
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	static {
		todos.add(new Todo(++idCounter, "jack", "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "jack", "Learn to Microservice", new Date(), false));
		todos.add(new Todo(++idCounter, "jack", "Learn to Angular", new Date(), false));
	}
	public List<Todo> findAll() {
		return todos;
	}
}
