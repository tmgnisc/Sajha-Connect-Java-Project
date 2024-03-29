package com.example;

import com.example.model.User;

public interface UserService {

	
	public User registerUser(User user);
	public User finUserById(int userId);
	public User findUserByEmail(String email);
    public User followUser();
}
