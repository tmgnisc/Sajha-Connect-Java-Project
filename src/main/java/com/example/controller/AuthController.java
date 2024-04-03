package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.config.JwtProvider;
import com.example.model.User;
import com.example.service.UserService;
import com.example.repository.UserRepository;
import com.example.response.AuthResponse;

@RestController
public class AuthController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/users")
	public AuthResponse createUser(@RequestBody User user) throws Exception {
		//email already use vako xa ki xaina check garna validation
		
		User isExist = userRepository.findByEmail(user.getEmail());
		if(isExist!=null) {
			throw new Exception("Email already used with another account");
		}
		
		User newUser=new User();
		newUser.setEmail(user.getEmail());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPassword(passwordEncoder.encode(user.getPassword()));
	
		
		User savedUser=userRepository.save(newUser);
		
		//token generate garnu paryo user create vayesi
		Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
		
		String token = JwtProvider.generateToken(authentication);  //yo generate vako token frontend ma pass garnu parxa
		
		return savedUser;
		
	}
}
