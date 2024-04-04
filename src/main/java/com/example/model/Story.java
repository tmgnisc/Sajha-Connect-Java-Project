package com.example.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Story {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne
	private User user;
	
	private String image;
	private String captions;
	private LocalDateTime timeStamp;
	
	public Story() {
		// TODO Auto-generated constructor stub
	}

	public Story(int id, User user, String image, String captions, LocalDateTime timeStamp) {
		super();
		this.id = id;
		this.user = user;
		this.image = image;
		this.captions = captions;
		this.timeStamp = timeStamp;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCaptions() {
		return captions;
	}

	public void setCaptions(String captions) {
		this.captions = captions;
	}

	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	
}
