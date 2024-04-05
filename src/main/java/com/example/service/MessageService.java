package com.example.service;

import java.util.List;


import com.example.model.Message;
import com.example.model.User;

public interface MessageService {

	
	public Message createMessage(User user, int chatId, Message req) throws Exception;
	public List<Message> findChatsMessages(int chatId) throws Exception;
}
