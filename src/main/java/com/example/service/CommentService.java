package com.example.service;

import com.example.model.Comment;

public interface CommentService {

	
	public Comment createComment(Comment comment, int postId, int userId ) throws Exception;  //yo comment kun post ma ho tesaile postId, ani kun uesr le gareko so userId
	
	
	public Comment findCommentById(int commentId) throws Exception;
	public Comment likeComment(int CommentId, int userId) throws Exception;
	
}
