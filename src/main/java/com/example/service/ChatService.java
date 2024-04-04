package com.example.service;

import java.util.List;

import com.example.model.Chat;
import com.example.model.User;

public interface ChatService {

	
	public Chat createChat(User reqUser, User user2);
	public Chat findChatById(int chatId) throws Exception;
	public List<Chat> findUsersChat(int userId);
	
}
