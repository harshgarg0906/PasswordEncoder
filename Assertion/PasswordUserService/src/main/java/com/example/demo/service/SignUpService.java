package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;

@Service
public class SignUpService {

	@Autowired
	UserRepo userRepo;
	public User signUp(User user) {
		// TODO Auto-generated method stub
		String password=user.getPassword();
		BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
		String hashCodedPassword=passwordEncoder.encode(password);
	    user.setPassword(hashCodedPassword);
	    User obtainedUser=userRepo.findByPsid(user.getPsid());
	    if(obtainedUser!=null)
	    {
	    	user.setExist(true);
	    	return user;
	    }
	    else
	    {
	    	user.setExist(false);
	    	userRepo.save(user);
	    	return user;
	    }
		
	}

}
