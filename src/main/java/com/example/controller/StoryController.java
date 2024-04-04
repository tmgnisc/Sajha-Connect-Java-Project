package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Story;
import com.example.model.User;
import com.example.service.StoryService;
import com.example.service.UserService;

@RestController
public class StoryController {
	
	@Autowired
	private StoryService storyService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/api/story")
	public Story createStory(@RequestBody Story story, @RequestHeader("Authorization") String jwt) {
		
		//user service ma euta method xa jasma hamle jwt provide garem vane tesle user return garxa
		
		User reqUser = userService.findUserByJwt(jwt);
		Story createdStory=storyService.createStory(story, reqUser);
		return createdStory;
	}
	
	@GetMapping("/api/story/user/{userId}")
	public List<Story> findUsersStory( @RequestHeader("Authorization") String jwt, @PathVariable int userId) throws Exception {
		
		//user service ma euta method xa jasma hamle jwt provide garem vane tesle user return garxa
		
		User reqUser = userService.findUserByJwt(jwt);
		List<Story> stories=storyService.findStoryByUserId(userId);
		return stories;
	}

}
