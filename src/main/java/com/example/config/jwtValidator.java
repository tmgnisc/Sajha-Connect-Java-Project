package com.example.config;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class jwtValidator extends OncePerRequestFilter {


	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		//jaba pani kunai secure end point access garxam header ma bearer token dinxam
		//so tesko lagi suru ma yesle token nikalxa
		String jwt =request.getHeader(JwtConstant.JWT_HEADER);   //authorization dherai use garxam so yeslai variable ma add garxam
		
		if(jwt!=null) {
			try {
				String email=JwtProvider.getEmailFromJwtToken(jwt); 
				List<GrantedAuthority> authorities = new ArrayList<>();
				
				//authentication create garxam aba
				
				Authentication authentication = new UsernamePasswordAuthenticationToken(email, null, authorities);
				//security context holder ma save garne
				
				SecurityContextHolder.getContext().setAuthentication(authentication);
						
			} catch (Exception e) {
				throw new BadCredentialsException("invalid token.........");
			}
		}
		else {
			throw new BadCredentialsException("please provide valid token");
		}
		
		filterChain.doFilter(request, response);
		
	}

	

}
