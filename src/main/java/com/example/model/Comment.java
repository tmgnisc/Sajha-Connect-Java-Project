package com.example.model;


import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String content;
	
	//euta user multiple comment garna sakxa tara euta comment herne ho vane euta user sita matra relate hunxa
	
	@ManyToOne
	private User user;
	
	//comment lai multiple user le like garna sakxan
	@ManyToMany
	private List<User> liked = new ArrayList<>();
	
}
