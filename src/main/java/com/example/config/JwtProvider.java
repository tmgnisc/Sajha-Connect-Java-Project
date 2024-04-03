package com.example.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Claims;
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
	
	public static String getEmailFromJwtToken(String jwt) {
		//jwt token Bearer kejejejejejejeje yesto format ma hunxa 
		//aba yesma feri Bearer vanne keyword chai chaidaina
		
		jwt = jwt.substring(7) ; //yesle k garxa vanda first 7 letter lai skip gardinxa tyo vaneko Bearer keyword lai skip garera tespaxi ko chai linxa
		
		Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();		
		
		String email=String.valueOf(claims.get("email"));   //email nikaleko
		
		return email;
		
	}
}
