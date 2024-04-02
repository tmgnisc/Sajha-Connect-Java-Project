package com.example.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtProvider {

	private static SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
	//aba yo key ko use hami token generate garna garxam
	
	
	//static banako instance banauna naparos vanera
	public static String generateToken(Authentication auth) {
		
		//jwt store garna varaible declare
		//jwt generate gareko
		 String jwt = Jwts.builder()
				 .setIssuer("Nischal").setIssuedAt(new Date())
				 .setExpiration(new Date(new Date().getTime()+86400000))       //miliseconds 24 hour token
				 .claim("email", auth.getName())
				 .signWith(key)
				 .compact();
		return jwt;
	}
}
