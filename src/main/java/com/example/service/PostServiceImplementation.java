package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Post;
import com.example.model.User;
import com.example.repository.PostRepository;
@Service
public class PostServiceImplementation implements PostService{
    @Autowired
	PostRepository postRepository;
    @Autowired
	UserService userService;
	
	@Override
	public Post createNewPost(Post post, int userId) throws Exception {
	    User user = userService.findUserById(userId); 
		
		Post newPost = new Post();
	     newPost.setCaption(post.getCaption());
	     newPost.setImage(post.getImage());
	     //error coming here 
//	     newPost.setCreatedAt(new LocalDateTime.now(zoneId));
	     newPost.setVideo(post.getVideo());
	     newPost.setUser(user);
	     
		return newPost;
	}

	@Override
	public String deletePost(int postId, int userId) {
		
		return null;
	}

	@Override
	public List<Post> findPostByUserId(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Post findPostByid(int postId) throws Exception {
		Optional<Post> opt = postRepository.findById(postId);
		if(opt.isEmpty()) {
			throw new Exception("post does not exist on given id"+postId);
		}
		return opt.get();
	}

	@Override
	public List<Post> findAllPost() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Post savedPost(int postId, int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Post likePost(int postId, int userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
