package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.Manager;

public interface IManagerService {
	
	public List<Manager> getAllManagers();
	
	public Optional<Manager> getManagerByID(long managerId);
	
	public boolean saveManager(Manager manager);
	
	public Manager updateManager(Manager manager);
	
	public boolean deleteManager(long managerId);

}
