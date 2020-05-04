package com.example.demo.service;

import java.util.List;

import com.example.demo.exception.AllCompanyNotFoundException;
import com.example.demo.model.SavedEncryptedPassword;

public interface IGeneratePasswordService {
	public String saveEncryptedPassword(SavedEncryptedPassword password);
	public List<SavedEncryptedPassword> getAllData(String psid) throws AllCompanyNotFoundException;
	public String deleteByWebSiteName(String webSiteName,String psid);
	public SavedEncryptedPassword updateData(SavedEncryptedPassword password, String id,String psid) throws AllCompanyNotFoundException;
}
