package com.example.demo.model;

public class EncryptedPassword {

	String encryptedpassword;
	String webSiteName;
	
	public EncryptedPassword()
	
	{
		
	}

	public EncryptedPassword(String encryptedpassword,String webSiteName) {
		this.encryptedpassword = encryptedpassword;
		this.webSiteName=webSiteName;
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

	@Override
	public String toString() {
		return "EncryptedPassword [encryptedpassword=" + encryptedpassword + ", webSiteName=" + webSiteName + "]";
	}

  
	
}
