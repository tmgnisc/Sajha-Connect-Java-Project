package com.example.service;

import java.util.List;

import com.example.model.Story;
import com.example.model.User;

public interface StoryService {

	public Story createStory(Story story, User user);
	public List<Story> findStoryByUserId(int userId) throws Exception;
}
