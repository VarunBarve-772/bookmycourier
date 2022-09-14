package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.Center;
import com.hexaware.bookmydelivery.entity.Manager;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.repository.ManagerRepository;

@Service
public class ManagerService implements IManagerService {

	@Autowired
	private ManagerRepository managerRepository;
	
	@Autowired
	private ICenterService centerService;
	
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
	public Manager updateManager(Manager manager)throws ResourseNotFoundException {

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

	@Override
	public Manager loginManager(Manager manager) {
		// TODO Auto-generated method stub
		return managerRepository.findByManagerUsernameAndManagerPass(manager.getManagerUsername(), manager.getManagerPass());
	}

	@Override
	public boolean addCenter(Long managerID, Long centerId) {
		// TODO Auto-generated method stub
		try {
			Optional<Manager> managerOptional = managerRepository.findById(managerID);
			Optional<Center> centerOptional = centerService.getCenterByID(centerId);
			Manager manager = managerOptional.get();
			Center center = centerOptional.get();
			
			manager.setCenter(center);
			
			managerRepository.save(manager);
			return true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		
	}
	

}
