package com.example.config;

import java.io.IOException;

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
		
		
	}

	

}
