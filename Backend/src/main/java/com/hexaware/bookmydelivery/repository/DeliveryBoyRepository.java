package com.hexaware.bookmydelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.bookmydelivery.entity.DeliveryBoy;

@Repository
public interface DeliveryBoyRepository extends JpaRepository<DeliveryBoy, Long> {

}
