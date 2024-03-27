package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;

@RestController
public class UserController {

	
	@GetMapping("/users")
	public List<User> getUsers() {
		
		List<User> users = new ArrayList<>();
		User user1 = new User(1,"Nischal","Tamang","nschaltmg2023@gmail.com","12345" );

		
		users.add(user1);
		return users;
		
	}
}
