package com.hexaware.bookmydelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.bookmydelivery.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

}
