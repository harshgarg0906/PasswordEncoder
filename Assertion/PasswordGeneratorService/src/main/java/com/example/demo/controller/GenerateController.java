package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

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
	
	private final static Logger logger=LogManager.getLogger(GenerateController.class);
	
	@Autowired
	GeneratePasswordService generatePasswordService;
	@PostMapping("/password")
	public EncryptedPassword getPassword(@RequestBody WebSiteData websiteData)
	{
		logger.info("in the password generator");
		String webSiteName=websiteData.getWebSiteName();
		String encryptedPasswordObtained=generatePasswordService.encryptPassword(webSiteName);
		EncryptedPassword encryptedPassword=new EncryptedPassword(encryptedPasswordObtained,webSiteName);
		return encryptedPassword;
	}
	
	@PostMapping("/save")
	public SavedEncryptedPassword savePassword(@RequestBody SavedEncryptedPassword password)
	{
		logger.info("Saving the password");
		String id = UUID.randomUUID().toString();
         password.setId(id);
         logger.info(password);
		 String response=generatePasswordService.saveEncryptedPassword(password);
		logger.info(response);
		if(response.equals("data exist"))
		{
			password.setDuplicate(true);
			return password;
		}
		else
		{
			password.setDuplicate(false);
			return password;
		}
		
		
	}
	
//	@GetMapping("/data")
//	List<SavedEncryptedPassword>  getAllData() throws AllCompanyNotFoundException
//	{
//		logger.info("Getting all the data");
//		List<SavedEncryptedPassword>  allData=generatePasswordService.getAllData();
//		return allData;
//	}
	
	@GetMapping("/data")
	List<SavedEncryptedPassword>  getAllData(@RequestParam String psid) throws AllCompanyNotFoundException
	{
		logger.info("Getting all the data");
		List<SavedEncryptedPassword>  allData=generatePasswordService.getAllData(psid);
		return allData;
	}
	
//	@DeleteMapping("/name")
//	public List<SavedEncryptedPassword>  deleteDataByName(@RequestParam("websiteName") String websiteName) throws AllCompanyNotFoundException
//	{
//		logger.info("In the deletion controller");
//		String response =generatePasswordService.deleteByWebSiteName(websiteName);
//		logger.info(response);
//		if(response.equals("1"))
//		{
//			logger.info("in the if condition");
//			List<SavedEncryptedPassword>  allData=generatePasswordService.getAllData();
//			logger.info(allData);
//			return allData;
//		}
//	   return null;
//	}
	
	
	@DeleteMapping("/name")
	public List<SavedEncryptedPassword>  deleteDataByName(@RequestParam("websiteName") String websiteName,@RequestParam String psid) throws AllCompanyNotFoundException
	{
		logger.info("In the deletion controller");
		String response =generatePasswordService.deleteByWebSiteName(websiteName,psid);
		logger.info(response);
		if(response.equals("1"))
		{
			logger.info("in the if condition");
			List<SavedEncryptedPassword>  allData=generatePasswordService.getAllData(psid);
			logger.info(allData);
			return allData;
		}
	   return null;
	}
	
	
	
//	@PatchMapping("/data")
//	public SavedEncryptedPassword updateData(@RequestBody SavedEncryptedPassword password) throws AllCompanyNotFoundException
//	{
//		logger.info("in the update");
//		String id=password.getId();
//		logger.info(id);
//		SavedEncryptedPassword obtainedPassword=generatePasswordService.updateData(password,id);
//		return obtainedPassword;
//	}
	
	@PatchMapping("/data")
	public SavedEncryptedPassword updateData(@RequestBody SavedEncryptedPassword password,@RequestParam String psid) throws AllCompanyNotFoundException
	{
		logger.info("in the update");
		String id=password.getId();
		logger.info(id);
		SavedEncryptedPassword obtainedPassword=generatePasswordService.updateData(password,id,psid);
		return obtainedPassword;
	}
	

}
