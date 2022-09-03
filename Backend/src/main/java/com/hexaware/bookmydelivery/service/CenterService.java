package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.Center;
import com.hexaware.bookmydelivery.repository.CenterRepository;

@Service 
public class CenterService implements ICenterService {

	@Autowired
	private CenterRepository centerRepository;
	
	@Override
	public List<Center> getAllCenters() {
		return centerRepository.findAll();
	}

	@Override
	public Optional<Center> getCenterByID(long centerId) {
		
		return centerRepository.findById(centerId);
	}

	@Override
	public boolean saveCenter(Center center) {
		
		try {
			centerRepository.save(center);
			return true;
		} catch (Exception e) {
			return false;		
		}

	}

	@Override
	public Center updateCenter(Center center) {

		return centerRepository.save(center);
	}

	@Override
	public boolean deleteCenter(long centerId) {
		try {
			centerRepository.deleteById(centerId);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
