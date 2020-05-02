package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SavedEncryptedPassword {
	@Id
	String id;
	String psid;
	String encryptedpassword;
	String webSiteName;
	Boolean duplicate;

	public SavedEncryptedPassword()
	{
		
	}

	public SavedEncryptedPassword(String encryptedpassword, String webSiteName,String id) {
		this.encryptedpassword = encryptedpassword;
		this.webSiteName = webSiteName;
		this.id=id;
	}

	public String getEncryptedpassword() {
		return encryptedpassword;
	}

	public void setEncryptedpassword(String encryptedpassword) {
		this.encryptedpassword = encryptedpassword;
	}

	public String getWebSiteName() {
		return webSiteName;
	}

	public void setWebSiteName(String webSiteName) {
		this.webSiteName = webSiteName;
	}
	
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
 
	
	public Boolean getDuplicate() {
		return duplicate;
	}

	public void setDuplicate(Boolean duplicate) {
		this.duplicate = duplicate;
	}
	
	

	public String getPsid() {
		return psid;
	}

	public void setPsid(String psid) {
		this.psid = psid;
	}

	@Override
	public String toString() {
		return "SavedEncryptedPassword [id=" + id + ", psid=" + psid + ", encryptedpassword=" + encryptedpassword
				+ ", webSiteName=" + webSiteName + ", duplicate=" + duplicate + "]";
	}

	
	
	
	
}
