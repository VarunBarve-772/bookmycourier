package com.hexaware.bookmydelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.bookmydelivery.entity.Manager;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long> {

}
