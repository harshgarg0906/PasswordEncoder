package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.example.demo.controller.GenerateController;
import com.example.demo.exception.AllCompanyNotFoundException;
import com.example.demo.model.SavedEncryptedPassword;
import com.example.demo.service.GeneratePasswordService;


//@ExtendWith(SpringExtension.class)
//@SpringBootTest(classes=PasswordGeneratorServiceApplication.class)
//@TestPropertySource("//application-test.properties")
//public class PasswordTestController {
//
//	@InjectMocks
//	GenerateController generateController;
//	
//	@Mock
//	GeneratePasswordService  generatePasswordService;
//	
//	@Test
//	public void testFindAll() throws AllCompanyNotFoundException
//	{
//		SavedEncryptedPassword first=new SavedEncryptedPassword("cvdcdgds", "google", "10");
//		SavedEncryptedPassword second=new SavedEncryptedPassword("saads", "airtel", "10");
//		SavedEncryptedPassword third=new SavedEncryptedPassword("asdds", "yahoo", "12");
//		
//		List<SavedEncryptedPassword> employeeList=new ArrayList<>();
//		employeeList.add(first);
//		employeeList.add(second);
//		employeeList.add(third);
//		
//		when(generatePasswordService.getAllData("10")).thenReturn(employeeList);
//		
//		
//		List<SavedEncryptedPassword>  result=generateController.getAllData("10");
//		
//		assertThat(result.size()).isEqualTo(2);
//	}
//	
//}
