package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.Customer;
import com.hexaware.bookmydelivery.repository.CustomerRepository;

@Service
public class CustomerService implements ICustomerService{

	@Autowired
	private CustomerRepository customerRepository;
	@Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return customerRepository.findAll();
	}

	@Override
	public Optional<Customer> getCustomerByID(long customerId) {
		// TODO Auto-generated method stub
		return customerRepository.findById(customerId);
	}

	@Override
	public boolean saveCustomer(Customer customer) {
		try {
			customerRepository.save(customer);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer);
	}

	@Override
	public boolean deleteCustomer(long customerId) {
		try {
			customerRepository.deleteById(customerId);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
