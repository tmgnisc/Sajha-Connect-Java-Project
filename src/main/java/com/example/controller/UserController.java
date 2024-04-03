package com.example.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;
import com.example.repository.UserRepository;
import com.example.service.UserService;

@RestController
@ComponentScan("com.example")	
public class UserController {

	@Autowired
	UserRepository userRepository;
	@Autowired
	UserService userService;
	
	//data sent garda body ma data send garxam...
	//yo data chai database ma add garna paryo
//vane tyo data access garna ko lagi yo annotation use garxam
	//frontend bata data add garna khojda data dinxam frontend bata tyo data yesari access garxam
	
	
	
	@GetMapping("/api/users")
	public List<User> getUsers() {
		List<User> users = userRepository.findAll();
	
		return users;
		
	}
	
		@GetMapping("/api/users/{userId}")
		public User getUserById(@PathVariable("userId")int id) throws Exception{
		User user= userService.findUserById(id);
		return user;

		
	}
		

		
		
		@PutMapping("/api/users/{userId}")
		public User updateUser(@RequestBody User user, @PathVariable int userId) throws Exception {
			User updatedUser = userService.updateUser(user, userId);
			return updatedUser;
		
		}
		
		
//		@DeleteMapping("users/{userId}")
//		public String deleteUser(@PathVariable("userId")int userId ) throws Exception {
//			
//			Optional<User> user = userRepository.findById(userId);
//			if(user.isEmpty()) {
//				throw new Exception("user not exist with id" +userId);
//			}
//			
//			userRepository.delete(user.get());
//			return "user deleted successfully with id " +userId; 
//		}
		
		@PutMapping("/api/users/follow/{userId1}/{userId2}")
		public User followUserHandler(@PathVariable int userId1, @PathVariable int userId2) throws Exception {
			User user = userService.followUser(userId1, userId2); 
			
			return user;
		}
		
		@GetMapping("/api/users/search")
		public List<User> searchUser(@RequestParam("query")String query){
			
			List<User> users = userService.searchuser(query);
			return users;
		}
		
		@GetMapping("/api/users/profile")
		public User getUserFromToken(@RequestHeader("Authorization") String jwt) {
			
			System.out.println("jwt------------"+jwt);
			
			return null;
		}
		
}
