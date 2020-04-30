package com.example.demo.model;

public class ExceptionResponseModel {

	private String message;
	
	
	public ExceptionResponseModel()
	{
		
	}

	public ExceptionResponseModel(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "ExceptionResponseModel [message=" + message + "]";
	}
	
	
	
	
	
}
