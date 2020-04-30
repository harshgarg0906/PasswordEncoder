package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.AllCompanyNotFoundException;
import com.example.demo.model.SavedEncryptedPassword;
import com.example.demo.repo.DatabaseSavePassword;
import com.example.demo.util.AES;

@Service
public class GeneratePasswordService {

	@Autowired
    DatabaseSavePassword databaseSavePassword;
	
    final String secretKey = "ssshhhhhhhhhhh!!!!";
    
	public String encryptPassword(String password)
	{
		 String encryptedString = AES.encrypt(password, secretKey) ;
		 return encryptedString;
	}
	
	public String saveEncryptedPassword(SavedEncryptedPassword password)
	{
		  databaseSavePassword.save(password);
		  return "data saved succesfuly";
	}
	
	public List<SavedEncryptedPassword> getAllData() throws AllCompanyNotFoundException
	{
		List<SavedEncryptedPassword> allData=databaseSavePassword.findAll();
		if(allData.isEmpty())
		{
			throw new AllCompanyNotFoundException("No Company Exist");
		}
		return allData;
	}
}
