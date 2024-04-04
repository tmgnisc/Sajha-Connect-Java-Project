package com.example.service;


import com.example.service.PostService;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.model.Comment;
import com.example.model.Post;
import com.example.model.User;
import com.example.repository.CommentRepository;

public class CommentServiceImplementation implements CommentService {

	@Autowired
	private PostService postService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Override
	public Comment createComment(Comment comment, int postId, int userId) throws Exception {
	
     User user = userService.findUserById(userId);
		Post post = postService.findPostById(postId);
		
		comment.setUser(user);
		comment.setContent(comment.getContent());
		comment.setCreatedAt(LocalDateTime.now());
		Comment savedComment = commentRepository.save(comment);
		return null;
	}

	@Override
	public Comment findCommentById(int commentId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Comment likeComment(int CommentId, int userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
