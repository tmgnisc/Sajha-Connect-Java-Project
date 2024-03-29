package com.example.service;

import java.util.List;

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
	public User finUserById(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findUserByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User followUser(int userId1, int userId2) {
		// TODO Auto-generated method stub
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
