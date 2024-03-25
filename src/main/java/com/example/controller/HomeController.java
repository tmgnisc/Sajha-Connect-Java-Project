package com.example.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	
	@GetMapping("/home")
	public String homeControllerHandler() {
		return "this is home controller";
	}
	
	// @PutMapping
//	@PostMapping
	//@DeleteMapping
	
	
}
