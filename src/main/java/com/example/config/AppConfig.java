package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class AppConfig {

	//yeslai annotate garenam vane chai kam gardaina
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
		//jati pani hamro api hunxa end point yedi tyo /api bata suru hunxa vane teslai authenicated garne
		//anyrequest permit all ko matlab api ko end point bata start vako lai authenticate garem....
		//tara baki jati pani api xa jun yo end point bata suru xaina suppose /users yiniharu lai chai permit gareko xam 
		//arule chai yiniharu lai access garna milxa
	http.authorizeHttpRequests(Authorize -> Authorize 
			.requestMatchers("/api/**").authenticated().anyRequest().permitAll())
	.httpBasic().and()
	.csrf(csrf-> csrf.disable());
		
		return http.build();
	}
}
