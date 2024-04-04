package com.example.service;

import com.example.model.Comment;

public interface CommentService {

	
	public Comment createComment(Comment comment, int postId, int userId );  //yo comment kun post ma ho tesaile postId, ani kun uesr le gareko so userId
	
	
	public Comment findCommentById(int commentId);
	public Comment likeComment(int CommentId, int userId);
	
}
