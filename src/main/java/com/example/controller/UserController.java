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

import com.example.exceptions.UserException;
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
		public User getUserById(@PathVariable("userId")int id) throws UserException{
		User user= userService.findUserById(id);
		return user;

		
	}
		

		//update ko lagi maile userid hatako xu kina ki afno profile matra update garna paryo ni ta aba maile endpoint ma userid dekheko 
		//xu vane ta url bata feri aru ko userid hanera pani ta edit garna sakxan testo garnu ta vayena tesaile /api/users/userid hatako
		
		@PutMapping("/api/users")
		public User updateUser(@RequestHeader("Authorization") String jwt, @RequestBody User user) throws UserException  {
			 User reqUser = userService.findUserByJwt(jwt);
		
			User updatedUser = userService.updateUser(user, reqUser.getId());    //aba yeta ko userid chai jwt token bata lyauxa
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
		
		@PutMapping("/api/users/follow/{userId2}")
		public User followUserHandler(@RequestHeader("Authorization") String jwt, @PathVariable int userId2) throws UserException {
			
			User reqUser = userService.findUserByJwt(jwt);
			User user = userService.followUser(reqUser.getId(), userId2);
			
			return user;
		}
		
		@GetMapping("/api/users/search")
		public List<User> searchUser(@RequestParam("query")String query){
			
			List<User> users = userService.searchuser(query);
			return users;
		}
		
		@GetMapping("/api/users/profile")
		public User getUserFromToken(@RequestHeader("Authorization") String jwt) {
			
	//		String email = 
		//	System.out.println("jwt------------"+jwt);
			
			User user = userService.findUserByJwt(jwt);
			
			//frontend ma password pathaune haina
			
			user.setPassword(null);
			return user;
		}
		
}
