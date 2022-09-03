package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.Manager;
import com.hexaware.bookmydelivery.repository.ManagerRepository;

@Service
public class ManagerService implements IManagerService {

	@Autowired
	private ManagerRepository managerRepository;
	@Override
	public List<Manager> getAllManagers() {
		// TODO Auto-generated method stub
		return managerRepository.findAll();
	}

	@Override
	public Optional<Manager> getManagerByID(long managerId) {
		// TODO Auto-generated method stub
		return managerRepository.findById(managerId);
	}

	@Override
	public boolean saveManager(Manager manager) {
		try {
			managerRepository.save(manager);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Manager updateManager(Manager manager) {

		return managerRepository.save(manager);
	}

	@Override
	public boolean deleteManager(long managerId) {
		try {
			managerRepository.deleteById(managerId);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
