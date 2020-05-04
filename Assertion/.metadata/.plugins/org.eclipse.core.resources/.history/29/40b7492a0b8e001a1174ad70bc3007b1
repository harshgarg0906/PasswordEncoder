package com.example.demo;
import com.example.demo.model.User;
import com.example.demo.model.User.UserRole;
import com.example.demo.repo.UserRepo;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;		
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PasswordUserServiceApplication {

	@Autowired
	UserRepo userRepo;
	public static void main(String[] args) {
		SpringApplication.run(PasswordUserServiceApplication.class, args);
	}


	@PostConstruct
	public void initData()
	{
		System.out.println("in the init method");
		List<User> list=new ArrayList<>();
		list.add(new User("10", "harsh@gmail.com", "$2a$10$PKfZwfXcVO6oCsNyelU5W.YQJPl5l8gzOqM2YrzvNnBOXld5JPKnW", UserRole.USER, true));
		list.add(new User("11", "rahul@gmail.com", "$2a$10$PKfZwfXcVO6oCsNyelU5W.YQJPl5l8gzOqM2YrzvNnBOXld5JPKnW", UserRole.USER, true));
		userRepo.saveAll(list);
		
	}

}
