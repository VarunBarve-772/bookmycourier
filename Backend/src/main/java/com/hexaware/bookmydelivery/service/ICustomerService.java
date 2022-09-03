package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.Customer;

public interface ICustomerService {

	public List<Customer> getAllCustomers();
	
	public Optional<Customer> getCustomerByID(long customerId);
	
	public boolean saveCustomer(Customer customer);
	
	public Customer updateCustomer(Customer customer);
	
	public boolean deleteCustomer(long customerId);

}
