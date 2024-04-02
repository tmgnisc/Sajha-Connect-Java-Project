package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.model.User;
import com.example.repository.UserRepository;

public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		//userdetailsservice deko ho spring le
		
		User user = userRepository.findByEmail(username); //mathi bata ako username email hunxa
		if(user == null) {
			throw new UsernameNotFoundException("user not found with email +" +username);
		}
		return null;
	}

	
}
