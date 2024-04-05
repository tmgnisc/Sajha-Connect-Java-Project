package com.example.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.model.Chat;
import com.example.model.Message;
import com.example.model.User;
import com.example.repository.MessageRepository;

public class MessageServiceImplementation implements MessageService {
	
	@Autowired
	private MessageRepository messageRepository;
	
	@Autowired
	private ChatService chatService;

	@Override
	public Message createMessage(User user, int chatId, Message req) throws Exception {
		Chat chat = chatService.findChatById(chatId);
			Message message = new Message();
			message.setChat(chat);
			message.setContent(req.getContent());
			message.setImage(req.getImage());
			message.setUser(user);
			message.setTimestamp(LocalDateTime.now());
		return messageRepository.save(message);
	}

	@Override
	public List<Message> findChatsMessages(int chatId) throws Exception{
		Chat chat = chatService.findChatById(chatId);
		return messageRepository.findByChatId(chatId);
	}

}
