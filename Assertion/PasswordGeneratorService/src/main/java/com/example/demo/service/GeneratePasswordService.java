package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controller.GenerateController;
import com.example.demo.exception.AllCompanyNotFoundException;
import com.example.demo.model.SavedEncryptedPassword;
import com.example.demo.repo.DatabaseSavePassword;
import com.example.demo.util.AES;

@Service
@Transactional
public class GeneratePasswordService {

	private final static Logger logger=LogManager.getLogger(GeneratePasswordService.class);
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
		 SavedEncryptedPassword savedEncryptedPassword= databaseSavePassword.findByWebSiteNameAndPsid(password.getWebSiteName(), password.getPsid());
		 if(savedEncryptedPassword!=null)
		 {
			 return "data exist";
		 }
		 else
		 {
			 databaseSavePassword.save(password);
			  return "data saved succesfuly";
		 }
		  
	}
	
//	public List<SavedEncryptedPassword> getAllData() throws AllCompanyNotFoundException
//	{
//		List<SavedEncryptedPassword> allData=databaseSavePassword.findAll();
//		if(allData.isEmpty())
//		{
//			throw new AllCompanyNotFoundException("No Company Exist");
//		}
//		return allData;
//	}
	
	public List<SavedEncryptedPassword> getAllData(String psid) throws AllCompanyNotFoundException
	{
		List<SavedEncryptedPassword> allData=databaseSavePassword.findAllByPsid(psid);
		if(allData.isEmpty())
		{
			throw new AllCompanyNotFoundException("No Company Exist");
		}
		return allData;
	}
	
//	public String deleteByWebSiteName(String webSiteName)
//	{
//		String response=databaseSavePassword.deleteByWebSiteName(webSiteName);
//		logger.info(response);
//		return response;
//	}
	
	public String deleteByWebSiteName(String webSiteName,String psid)
	{
		String response=databaseSavePassword.deleteByWebSiteNameAndPsid(webSiteName,psid);
		logger.info(response);
		return response;
	}

//	public SavedEncryptedPassword updateData(SavedEncryptedPassword password, String id) throws AllCompanyNotFoundException {
//		Optional<SavedEncryptedPassword> obtainedData=databaseSavePassword.findById(id);
//		logger.info(obtainedData.get());
//		if(obtainedData.isPresent())
//		{
//			logger.info("in the if condition");
//			SavedEncryptedPassword retriveData=obtainedData.get();
//			retriveData.setEncryptedpassword(password.getEncryptedpassword());
//			retriveData.setWebSiteName(password.getWebSiteName());
//			databaseSavePassword.save(retriveData);
//			logger.info("After the saving");
//			logger.info(retriveData);
//			return retriveData;
//		}
//		else
//		{
//			throw new AllCompanyNotFoundException("No data Exist");
//		}
//		
//	}
	
	public SavedEncryptedPassword updateData(SavedEncryptedPassword password, String id,String psid) throws AllCompanyNotFoundException {
		Optional<SavedEncryptedPassword> obtainedData=databaseSavePassword.findByIdAndPsid(id,psid);
		logger.info(obtainedData.get());
		if(obtainedData.isPresent())
		{
			logger.info("in the if condition");
			SavedEncryptedPassword retriveData=obtainedData.get();
			retriveData.setEncryptedpassword(password.getEncryptedpassword());
			retriveData.setWebSiteName(password.getWebSiteName());
			databaseSavePassword.save(retriveData);
			logger.info("After the saving");
			logger.info(retriveData);
			return retriveData;
		}
		else
		{
			throw new AllCompanyNotFoundException("No data Exist");
		}
		
	}
}
