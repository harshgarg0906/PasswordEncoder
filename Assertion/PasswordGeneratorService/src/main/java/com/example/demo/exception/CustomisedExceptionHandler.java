package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.demo.model.ExceptionResponseModel;

@ControllerAdvice
@RestController
public class CustomisedExceptionHandler  extends ResponseEntityExceptionHandler {

	@ExceptionHandler(AllCompanyNotFoundException.class)
	public final ResponseEntity<Object> handleExceptionAll(Exception ex, WebRequest request) throws Exception 
	{
		
		ExceptionResponseModel model=new ExceptionResponseModel("No Data Found");
		return new ResponseEntity<>(model, HttpStatus.NOT_FOUND);
	}
}
