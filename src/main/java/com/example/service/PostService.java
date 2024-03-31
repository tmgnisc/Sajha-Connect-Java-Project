package com.example.service;

import com.example.model.Post;

public interface PostService {

	Post createNewPost(Post post, int userId) throws Exception;

	String deletePost(int portId, int userId);
}
