package com.example.model;



import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
    private String caption;
    private String image;
    private String video;
    private User user;
    private LocalDateTime createdAt;
}
