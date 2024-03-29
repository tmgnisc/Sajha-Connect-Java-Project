package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.User;
import com.example.repository.UserRepository;


//business class logic
@Service
public class UserServiceImplementation implements UserService{
	
	@Autowired
	UserRepository userRepository;
	

	@Override
	public User registerUser(User user) {
		User newUser=new User();
		newUser.setEmail(user.getEmail());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPassword(user.getPassword());
		newUser.setId(user.getId());
		
		User savedUser=userRepository.save(newUser);
		return savedUser;
	}

	@Override
	public User findUserById(int userId) throws Exception {
		Optional<User> user = userRepository.findById(userId);

		if(user.isPresent()) {
			return user.get();
		}
				
			
				throw new Exception("user not exit with this id"+userId);
	}

	@Override
	public User findUserByEmail(String email) {
		User user= userRepository.findByEmail(email);
		return user; 
	}	

	@Override
	public User followUser(int userId1, int userId2) throws Exception{
		User user1 = findUserById(userId1);
		User user2= findUserById(userId2);
		//update hunxa user2 ma ani followers add gardinxa 
		user2.getFollowers().add(user1.getId()); //first user ko id yesma add gardinxa 
		//first user le second user lai follow garxa vane 
		user1.getFollowings().add(user2.getId());
		return null;
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> searchuser(String query) {
		// TODO Auto-generated method stub
		return null;
	}



	

}
