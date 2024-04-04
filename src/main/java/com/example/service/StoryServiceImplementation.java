package com.example.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Story;
import com.example.model.User;
import com.example.repository.StoryRepository;


@Service
public class StoryServiceImplementation implements StoryService{

	@Autowired
	private StoryRepository storyRepository;
	
	@Autowired
	private UserService userService;
	
	@Override
	public Story createStory(Story story, User user) {
		
		Story createdStory = new Story();
		createdStory.setCaptions(story.getCaptions());
		createdStory.setImage(story.getImage());
		createdStory.setUser(user);
		createdStory.setTimeStamp(LocalDateTime.now());
		
		return storyRepository.save(createdStory);
	}

	@Override
	public List<Story> findStoryByUserId(int userId) throws Exception {
		
		User user = userService.findUserById(userId);
		
		
		return storyRepository.findByUserId(userId);
	}

}
