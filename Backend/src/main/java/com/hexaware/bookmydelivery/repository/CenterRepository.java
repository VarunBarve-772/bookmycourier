package com.hexaware.bookmydelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.bookmydelivery.entity.Center;

@Repository
public interface CenterRepository extends JpaRepository<Center, Long> {

}
