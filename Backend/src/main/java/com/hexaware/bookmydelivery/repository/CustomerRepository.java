package com.hexaware.bookmydelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.bookmydelivery.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
