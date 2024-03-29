package com.example.service;

import java.util.List;

import com.example.model.User;

public interface UserService {

	
	public User registerUser(User user);
	public User findUserById(int userId) throws Exception;
	public User findUserByEmail(String email);
    public User followUser(int userId1, int userId2);
    public User updateUser(User user);
    public List<User> searchuser(String query);
}
