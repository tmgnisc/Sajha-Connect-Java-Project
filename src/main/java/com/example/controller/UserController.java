package com.example.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;
import com.example.repository.UserRepository;

@RestController
@ComponentScan("com.example")	
public class UserController {

	@Autowired
	UserRepository userRepository;
	
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
		
		User savedUser=userRepository.save(newUser);
		return savedUser;
		
	}
	
	
	@GetMapping("/users")
	public List<User> getUsers() {
		List<User> users = userRepository.findAll();
	
		return users;
		
	}
	
		@GetMapping("/users/{userId}")
		public User getUserById(@PathVariable("userId")int id) throws Exception{
		
	Optional<User> user = userRepository.findById(id);

if(user.isPresent()) {
	return user.get();
}
		
	
		throw new Exception("user not exit with userid"+id);
		
	}
		

		
		
		@PutMapping("/users/{userId}")
		public User updateUser(@RequestBody User user, @PathVariable int userId) throws Exception {
			
			//checking user if exist or not
			Optional<User> user1 = userRepository.findById(userId);
			if(user1.isEmpty()) {
				throw new Exception("user not exist with this mentioned id."+userId);
			}
			User oldUser=user1.get();
//			User user1 = new User(1,"Nischal","Tamang","nschaltmg2023@gmail.com","12345" );
			
//			if(user.getFirstName()!=null) {
//				user1.setFirstName(user.getFirstName());
//				
//			}
//			if(user.getLastName()!=null) {
//				user1.setLastName(user.getLastName());
//			}
//			
//			if(user.getEmail()!=null) {
//				user1.setEmail(user.getEmail());
//			}
			
			if(user.getFirstName()!=null) {
				oldUser.setFirstName(user.getFirstName());
			}
			
			if(user.getLastName()!=null) {
				oldUser.setLastName(user.getLastName());
				
			}
			
			if(user.getEmail()!=null) {
				oldUser.setEmail(user.getEmail());
			}
			User updatedUser = userRepository.save(oldUser);
			
			return updatedUser;
		}
		
		
		@DeleteMapping("users/{userId}")
		public String deleteUser(@PathVariable("userId")int userId ) throws Exception {
			
			Optional<User> user = userRepository.findById(userId);
			if(user.isEmpty()) {
				throw new Exception("user not exist with id" +userId);
			}
			
			userRepository.delete(user.get());
			return "user deleted successfully with id " +userId; 
		}
		
}
