package com.example.request;

import com.example.model.User;

public class CreateChatRequest {
	
	private User reqUser;
	private int userId;
 private User user2;
 
 public CreateChatRequest() {
	// TODO Auto-generated constructor stub
}

public User getReqUser() {
	return reqUser;
}

public void setReqUser(User reqUser) {
	this.reqUser = reqUser;
}

public User getUser2() {
	return user2;
}

public void setUser2(User user2) {
	this.user2 = user2;
}

public int getUserId() {
	return userId;
}

public void setUserId(int userId) {
	this.userId = userId;
}

public CreateChatRequest(User reqUser, int userId, User user2) {
	super();
	this.reqUser = reqUser;
	this.userId = userId;
	this.user2 = user2;
}


 
 
}
