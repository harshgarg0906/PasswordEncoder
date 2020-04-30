package com.example.demo.model;

public class WebSiteData {

	private String webSiteName;

	public WebSiteData() {
		
	}

	public WebSiteData(String webSiteName) {
		this.webSiteName = webSiteName;
	}

	public String getWebSiteName() {
		return webSiteName;
	}

	public void setWebSiteName(String webSiteName) {
		this.webSiteName = webSiteName;
	}

	@Override
	public String toString() {
		return "WebSiteData [webSiteName=" + webSiteName + "]";
	}
	
	
	
	
	
	
}
