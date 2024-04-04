package com.example.service;

import java.util.List;

import com.example.model.Reels;
import com.example.model.User;

public interface ReelsService {

	
	public Reels createReel(Reels reel, User user);
	public List<Reels> findAllReels();
	public List<Reels> findUserReel(int userId) throws Exception;
}
