package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.Customer;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;

public interface ICustomerService {

	public List<Customer> getAllCustomers();
	
	public Optional<Customer> getCustomerByID(long customerId);
	
	public boolean saveCustomer(Customer customer);
	
	public Customer updateCustomer(Customer customer)throws ResourseNotFoundException;
	
	public boolean deleteCustomer(long customerId);
	
	public Customer loginCustomer(Customer customer);

}
