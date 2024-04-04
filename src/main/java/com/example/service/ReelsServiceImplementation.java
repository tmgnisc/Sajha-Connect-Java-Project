package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Reels;
import com.example.model.User;
import com.example.repository.ReelsRepository;


@Service
public class ReelsServiceImplementation implements ReelsService{

	@Autowired
	 private ReelsRepository reelsRepository;
	
	@Autowired
	private UserService userService;
	
	@Override
	public Reels createReel(Reels reel, User user) {
		Reels createReel = new Reels();
		
		
		createReel.setTitle(reel.getTitle());
		createReel.setUser(reel.getUser());
		createReel.setVideo(reel.getVideo());
		return reelsRepository.save(createReel);
	}

	@Override
	public List<Reels> findAllReels() {
	
	
		return	reelsRepository.findAll();
	}

	@Override
	public List<Reels> findUserReel(int userId) throws Exception {
		
		userService.findUserById(userId);
		
		return reelsRepository.findByUserId(userId);
	}

}
