package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.model.User;
import com.example.repository.UserRepository;

@Service
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
		
		//user role xaina tesaile empty xa role user ko role define gareko xaina 
		//ecommerce tira chai hunax yesto end point accecss dinu parxa aile hamro project ma chai xaina
		List<GrantedAuthority> authorities=new ArrayList<>();
		
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
	}

	
}
