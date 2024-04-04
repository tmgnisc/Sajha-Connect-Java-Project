package com.example.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Post;
import com.example.model.User;
import com.example.repository.PostRepository;
import com.example.repository.UserRepository;
@Service
public class PostServiceImplementation implements PostService{
    @Autowired
	PostRepository postRepository;
    @Autowired
	UserService userService;

    @Autowired
    UserRepository userRepository;
	@Override
	public Post createNewPost(Post post, int userId) throws Exception {
	    User user = userService.findUserById(userId); 
		
		Post newPost = new Post();
	     newPost.setCaption(post.getCaption());
	     newPost.setImage(post.getImage());
	 
	  newPost.setCreatedAt(LocalDateTime.now());
	     newPost.setVideo(post.getVideo());
	     newPost.setUser(user);
	     
		return postRepository.save(newPost);
	}

	@Override
	public String deletePost(int postId, int userId) throws Exception {
		Post post = findPostById(postId);
		User user = userService.findUserById(userId);
		//post delete logic of using id
		if(post.getUser().getId()!=user.getId()) {
			throw new Exception("you can't delete another users post");
		}
		
		postRepository.delete(post);
		return "post deleted successfully";
		
	}

	@Override
	public List<Post> findPostByUserId(int userId) {
		
		return postRepository.findPostByUserId(userId);
	}




	@Override
	public List<Post> findAllPost() {
		// TODO Auto-generated method stub
		return postRepository.findAll();
	}

	@Override
	public Post savedPost(int postId, int userId) throws Exception {
		Post post = findPostById(postId);
		User user = userService.findUserById(userId);
		if(user.getSavedPost().contains(post)) {
			user.getSavedPost().remove(post);
		} else 
			user.getSavedPost().add(post);
		userRepository.save(user);
		return post;
	}

	@Override
	public Post likePost(int postId, int userId) throws Exception{
		//kun user like garna chahanxa tesko logic
		Post post = findPostById(postId);
		User user = userService.findUserById(userId);
		
		//logic
		//yedi like gareko xam vane feri press garyo vane remove hunxa
		//haina vane like hunxa
		if(post.getLiked().contains(user)) {
			post.getLiked().remove(user);
		} else {
			post.getLiked().add(user);
		}
		
	
		
		return postRepository.save(post);
	}

	@Override
	public Post findPostById(int postId) throws Exception {
		Optional<Post> opt = postRepository.findById(postId);
		if(opt.isEmpty()) {
			throw new Exception("post does not exist on given id"+postId);
		}
		return opt.get();
	}

}
