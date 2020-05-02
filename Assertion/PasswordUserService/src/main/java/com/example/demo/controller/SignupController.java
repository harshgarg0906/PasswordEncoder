package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.SignUpService;

@RestController
public class SignupController {

	@Autowired
	SignUpService signUpService;
	
	@PostMapping("/signup")
	public User signUp(@RequestBody User user)
	{
		System.out.println("in the signup");
		User responeUser=signUpService.signUp(user);
		System.out.println(responeUser);
		return user;
	}
}
