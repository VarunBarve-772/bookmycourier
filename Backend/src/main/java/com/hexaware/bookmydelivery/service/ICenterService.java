package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.Center;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;

public interface ICenterService {

	public List<Center> getAllCenters();
	
	public Optional<Center> getCenterByID(long centerId);
	
	public boolean saveCenter(Center center);
	
	public Center updateCenter(Center center)throws ResourseNotFoundException;
	
	public boolean deleteCenter(long centerId);

}
