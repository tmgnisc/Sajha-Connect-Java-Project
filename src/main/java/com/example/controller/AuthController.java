package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.config.JwtProvider;
import com.example.model.User;
import com.example.service.UserService;
import com.example.repository.UserRepository;
import com.example.request.LoginRequest;
import com.example.response.AuthResponse;
import com.example.service.CustomUserDetailsService;

@RestController
@RequestMapping("/auth")    //kunai pani requestmapping ma end point dinxam ni yo vitra jati pani chij xa api tesko agadi ko endpoint auth hunxa 
public class AuthController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private CustomUserDetailsService customUserDetails;
	
	@PostMapping("/signup")
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
		
		AuthResponse res = new AuthResponse(token, "Register_Success");
		
		return res;
		
	}
	
	public AuthResponse signin(@RequestBody LoginRequest loginRequest ) {
		
		Authentication authentication = authenticate(loginRequest.getEmail(), loginRequest.getPassword());
		return null;
	}
	
	private Authentication authenticate(String email, String password) {
		
		UserDetails userDetails = customUserDetails.loadUserByUsername(email);
		if(userDetails==null) {
			throw new BadCredentialsException("invalid username");
		}
		
		if(!passwordEncoder.matches(password, userDetails.getPassword())) {
			throw new BadCredentialsException("Password not matched!!!!!");
		}
		return new UsernamePasswordAuthenticationToken(userDetails, null,  userDetails.getAuthorities());
	}
}
