package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.HeadManager;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.repository.HeadManagerRepository;

@Service
public class HeadManagerService implements IHeadManagerService {

	@Autowired
	private HeadManagerRepository headManagerRepository;
	
	@Override
	public List<HeadManager> getAllHeadManagers() {
		
		return headManagerRepository.findAll();
	}

	@Override
	public Optional<HeadManager> getHeadManagerByID(long headManagerId) {

		return headManagerRepository.findById(headManagerId);
	}

	@Override
	public boolean saveHeadManager(HeadManager headManager) {
		try {
			headManagerRepository.save(headManager);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public HeadManager updateHeadManager(HeadManager headManager)throws ResourseNotFoundException  {
		return headManagerRepository.save(headManager);
	}

	@Override
	public boolean deleteHeadManager(long headManagerId) {
		try {
			headManagerRepository.deleteById(headManagerId);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
