package com.example.demo.exception;

public class AllCompanyNotFoundException extends Exception {

	private String message;

	public AllCompanyNotFoundException(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "AllCompanyNotFoundException [message=" + message + "]";
	}
	
	
	
}
