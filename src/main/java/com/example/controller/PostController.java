package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.PostService;

@RestController
public class PostController {

	@Autowired
	PostService postService;
}
