package com.example.service;

import java.util.List;

import com.example.exceptions.UserException;
import com.example.model.User;

public interface UserService {

	
	public User registerUser(User user);
	public User findUserById(int userId) throws UserException;
	public User findUserByEmail(String email);
    public User followUser(int userId1, int userId2) throws UserException;
    public User updateUser(User user, int userId) throws UserException;
    public List<User> searchuser(String query);
    
    public User findUserByJwt(String jwt);
}
