package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.AllCompanyNotFoundException;
import com.example.demo.model.EncryptedPassword;
import com.example.demo.model.SavedEncryptedPassword;
import com.example.demo.model.WebSiteData;
import com.example.demo.service.GeneratePasswordService;

@RestController
public class GenerateController {
	
	@Autowired
	GeneratePasswordService generatePasswordService;
	@PostMapping("/password")
	public EncryptedPassword getPassword(@RequestBody WebSiteData websiteData)
	{
		System.out.println("in the password generator");
		String webSiteName=websiteData.getWebSiteName();
		String encryptedPasswordObtained=generatePasswordService.encryptPassword(webSiteName);
//		System.out.println("in the password generators");
//		System.out.println(encryptedPasswordObtained);
		EncryptedPassword encryptedPassword=new EncryptedPassword(encryptedPasswordObtained,webSiteName);
		return encryptedPassword;
	}
	
	@PostMapping("/save")
	public SavedEncryptedPassword savePassword(@RequestBody SavedEncryptedPassword password)
	{
		System.out.println("Saving the password");
		String id = UUID.randomUUID().toString();
         password.setId(id);
         System.out.println(password);
		String response=generatePasswordService.saveEncryptedPassword(password);
		System.out.println(response);
		return password;
	}
	
	@GetMapping("/data")
	List<SavedEncryptedPassword>  getAllData() throws AllCompanyNotFoundException
	{
		System.out.println("Getting all the data");
		List<SavedEncryptedPassword>  allData=generatePasswordService.getAllData();
		return allData;
	}
	
	@DeleteMapping("/name")
	public List<SavedEncryptedPassword>  deleteDataByName(@RequestParam("websiteName") String websiteName) throws AllCompanyNotFoundException
	{
		System.out.println("In the deletion controller");
		String response =generatePasswordService.deleteByWebSiteName(websiteName);
		System.out.println(response);
		if(response.equals("1"))
		{
			System.out.println("in the if condition");
			List<SavedEncryptedPassword>  allData=generatePasswordService.getAllData();
			System.out.println(allData);
			return allData;
		}
	   return null;
	}
	
	@PatchMapping("/data")
	public SavedEncryptedPassword updateData(@RequestBody SavedEncryptedPassword password) throws AllCompanyNotFoundException
	{
		System.out.println("in the update");
		String id=password.getId();
		SavedEncryptedPassword obtainedPassword=generatePasswordService.updateData(password,id);
		return obtainedPassword;
	}
	

}
