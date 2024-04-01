package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Post;
import com.example.service.PostService;

@RestController
public class PostController {

	@Autowired
	PostService postService;
	
	
	
	//j pani response pathauxam frontend ma responseentity bata pathauxam direct class bata haina
	@PostMapping("/posts")
	public ResponseEntity<Post> createPost(Post post, int userId)throws Exception{
		
		Post createdPost = postService.createNewPost(post, userId);
		return new ResponseEntity<>(createdPost, HttpStatus.ACCEPTED);
	}
}