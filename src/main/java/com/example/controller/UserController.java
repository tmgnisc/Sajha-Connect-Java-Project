package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;

@RestController
@ComponentScan("com.example")	
public class UserController {

	
	@GetMapping("/users")
	public List<User> getUsers() {
		
		List<User> users = new ArrayList<>();
		User user1 = new User(1,"Nischal","Tamang","nschaltmg2023@gmail.com","12345" );

		
		users.add(user1);
		return users;
		
	}
	
		@GetMapping("/users/{userId}")
		public User getUserById(@PathVariable("userId")int id) {
		
	
		User user1 = new User(1,"Nischal","Tamang","nschaltmg2023@gmail.com","12345" );
		user1.setId(id);
		

		
	
		return user1;
		
	}
		
		//data sent garda body ma data send garxam...
		//yo data chai database ma add garna paryo
//vane tyo data access garna ko lagi yo annotation use garxam
		//frontend bata data add garna khojda data dinxam frontend bata tyo data yesari access garxam
		@PostMapping("/users")
		public User createUser(@RequestBody User user) {
			User newUser=new User();
			newUser.setEmail(user.getEmail());
			newUser.setFirstName(user.getFirstName());
			newUser.setLastName(user.getLastName());
			newUser.setPassword(user.getPassword());
			newUser.setId(user.getId());
			return newUser;
			
		}
		
		
		@PutMapping("/users")
		public User updateUser(@RequestBody User user) {
			
			User user1 = new User(1,"Nischal","Tamang","nschaltmg2023@gmail.com","12345" );
			
			if(user.getFirstName()!=null) {
				user1.setFirstName(user.getFirstName());
				
			}
			if(user.getLastName()!=null) {
				user1.setLastName(user.getLastName());
			}
			
			if(user.getEmail()!=null) {
				user1.setEmail(user.getEmail());
			}
			
			
			return user1;
		}
}
