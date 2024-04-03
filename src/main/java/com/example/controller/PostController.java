package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Post;
import com.example.response.ApiResponse;
import com.example.service.PostService;
import com.example.service.UserService;
import com.example.model.User;

@RestController
public class PostController {

	@Autowired
	PostService postService;
	
	@Autowired
	UserService userService;
	
	//userid hatako xu kina ki aru user le feri endpoint ma userid arko halera ni post halna sakxan
	//j pani response pathauxam frontend ma responseentity bata pathauxam direct class bata haina
	@PostMapping("/api/posts")  //userid yesma logged in bata linxa not from frontend
	public ResponseEntity<Post> createPost(@RequestHeader("Authorization") String jwt, @RequestBody Post post)throws Exception{
		
		User reqUser = userService.findUserByJwt(jwt);
		Post createdPost = postService.createNewPost(post, reqUser.getId());
		return new ResponseEntity<>(createdPost, HttpStatus.ACCEPTED);
	}
	
	//delete post method
	
	@DeleteMapping("/posts/{postId}/user/{userId}")
	public ResponseEntity<ApiResponse> deletePost(@PathVariable int postId, @PathVariable int userId) throws Exception{
		
		String message= postService.deletePost(postId, userId);
		ApiResponse res = new ApiResponse(message, true);
		return new ResponseEntity<ApiResponse>(res, HttpStatus.OK);
	}
	
	
	@GetMapping("/posts/{postId}")
	public ResponseEntity<Post> findPostByIdHandler(@PathVariable int postId) throws Exception{
		Post post = postService.findPostById(postId);
		return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/posts/user/{userId}")
	public ResponseEntity<List<Post>>findUserPost(@PathVariable int userId){
		List<Post> posts = postService.findPostByUserId(userId);
		return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
	}
	
	
	
	@GetMapping("/posts")
	public ResponseEntity<List<Post>>findAllPost(){
		List<Post> posts = postService.findAllPost();
		return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
	}
	
	@PutMapping("/posts/{postId}/user/{userId}")
	public ResponseEntity<Post> savedPostHandler(@PathVariable int postId, @PathVariable int userId) throws Exception{
		Post post = postService.savedPost(postId, userId);
		return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/posts/like/{postId}/user/{userId}")
	public ResponseEntity<Post> likePostHandler(@PathVariable int postId, @PathVariable int userId) throws Exception{
		Post post = postService.likePost(postId, userId);
		return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
	}
}
