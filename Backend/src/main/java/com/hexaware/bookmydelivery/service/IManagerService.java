package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.Manager;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;

public interface IManagerService {
	
	public List<Manager> getAllManagers();
	
	public Optional<Manager> getManagerByID(long managerId);
	
	public boolean saveManager(Manager manager);
	
	public Manager updateManager(Manager manager)throws ResourseNotFoundException;
	
	public boolean deleteManager(long managerId);

	public Manager loginManager(Manager manager);
	
	public boolean addCenter(Long managerID, Long centerId);
}
