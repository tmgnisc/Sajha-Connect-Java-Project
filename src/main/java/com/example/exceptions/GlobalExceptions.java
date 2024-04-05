package com.example.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice   //spring security lai vaneko yeta exception handle vanera
public class GlobalExceptions {

	public ResponseEntity<ErrorDetails> otherExceptionHandler(Exception ue, 
			WebRequest req){
		
		
		return null;
	}
}
