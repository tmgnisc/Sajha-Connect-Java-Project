package com.example.model;



import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
    private String caption;
    private String image;
    private String video;
    
    //entity relationship mapping
    //euta post ko euta user hunxa multiple user hudaina 
    //one user xa multiple post xa   //multiple post create garna sakxa euta user le
    
    @ManyToOne
    private User user;
    
    
    //euta post lai multiple user le like garna sakxa
    //tara euta user le ekchoti matra like garna milxa multiple choti eutai post lai like garna mildaina
    //tara euta post vitra multiple user le like garna milxa
  //one post xa multiple user le like garna milxa
    
    @OneToMany     
    private List<User> liked=new ArrayList<>();
    
    private LocalDateTime createdAt;
    
    //comment thapyo
    //euta post ma multiple comment auna sakxa tara euta comment vaneko euta post ko lagi generate hunxa
    @OneToMany
    private List<Comment> comments = new ArrayList<>();
    
    
    public Post() {
    	
    }
    
	





	public Post(int id, String caption, String image, String video, User user, List<User> liked,
			LocalDateTime createdAt, List<Comment> comments) {
		super();
		this.id = id;
		this.caption = caption;
		this.image = image;
		this.video = video;
		this.user = user;
		this.liked = liked;
		this.createdAt = createdAt;
		this.comments = comments;
	}







	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCaption() {
		return caption;
	}
	public void setCaption(String caption) {
		this.caption = caption;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}



	public List<User> getLiked() {
		return liked;
	}



	public void setLiked(List<User> liked) {
		this.liked = liked;
	}







	public List<Comment> getComments() {
		return comments;
	}







	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	
	
	
    
}
