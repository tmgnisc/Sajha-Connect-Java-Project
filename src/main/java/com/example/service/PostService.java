package com.example.service;

import java.util.List;

import com.example.model.Post;

public interface PostService {

	Post createNewPost(Post post, int userId) throws Exception;

	String deletePost(int postId, int userId) throws Exception;
	List<Post> findPostByUserId(int userId);
	Post findPostById(int postId) throws Exception;
	List<Post> findAllPost();
	Post savedPost(int postId, int userId) throws Exception;
	Post likePost(int postId, int userId) throws Exception;
}
