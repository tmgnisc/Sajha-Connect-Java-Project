package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Story;

public interface StoryRepository extends JpaRepository<Story, Integer> {

	public List<Story> findByUserId(int userId);
}
