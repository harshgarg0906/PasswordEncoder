package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.SavedEncryptedPassword;

@Repository
public interface DatabaseSavePassword extends JpaRepository<SavedEncryptedPassword, String> {
      String deleteByWebSiteName(String webSiteName);
      SavedEncryptedPassword findByWebSiteName(String webSiteName);
}
