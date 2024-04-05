package com.example.config;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import com.mysql.cj.x.protobuf.MysqlxDatatypes.Array;

import jakarta.servlet.http.HttpServletRequest;

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
	http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))  //stateless diyesi server ma session storage gardaina
	//tesko satta frontend ma localstorage ma jwt store hunxa ra kunai req hune bittikai header ma jwt dinxam
	//server ma session store garnu parena header mai token dida hunxa
	//simple vannu parda password username jasto kam garxa
	
	.authorizeHttpRequests(Authorize -> Authorize 
			.requestMatchers("/api/**").authenticated()   //authenticate garna lai chai token header ma auxa 
			.anyRequest().permitAll())
.addFilterBefore(new jwtValidator(), BasicAuthenticationFilter.class)    //tyo endpoint ma janu agadi user authenticate ho ki haina check garna banako method
	.csrf(csrf-> csrf.disable())
	.cors(cors->cors.configurationSource(CorsConfigurationSource()));
	
		
		return http.build();
	}
	
	private CorsConfigurationSource CorsConfigurationSource() {
		//kun kun url lai allow garne jasto 
		
		return new CorsConfigurationSource() {
			
			@Override
			public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
			
				CorsConfiguration cfg = new CorsConfiguration();
				cfg.setAllowedOrigins(Arrays.asList(
                        "http://localhost:3000/"));
				cfg.setAllowedMethods(Collections.singletonList("*"));
				cfg.setAllowCredentials(true);
				cfg.setAllowedHeaders(Collections.singletonList("*"));
				cfg.setExposedHeaders(Arrays.asList(
                        "Authorization"));
				cfg.setMaxAge(3600L);
				
				return cfg;
			}
		};
	}

	@Bean   //password encode garna lai usehunxa
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
