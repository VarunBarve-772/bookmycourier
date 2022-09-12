package com.hexaware.bookmydelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.bookmydelivery.entity.HeadManager;

@Repository
public interface HeadManagerRepository extends JpaRepository<HeadManager, Long> {

	public HeadManager findByHeadManagerUsernameAndHeadManagerPass(String username, String pass);
}
