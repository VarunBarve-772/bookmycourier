package com.hexaware.bookmydelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.bookmydelivery.entity.BookedCourier;

@Repository
public interface BookedCourierRepository extends JpaRepository<BookedCourier, Long> {

}
