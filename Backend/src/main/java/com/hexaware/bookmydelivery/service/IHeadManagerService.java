package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.HeadManager;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;

public interface IHeadManagerService {
	
	public List<HeadManager> getAllHeadManagers();
	
	public Optional<HeadManager> getHeadManagerByID(long headManagerId);
	
	public boolean saveHeadManager(HeadManager headManager);
	
	public HeadManager updateHeadManager(HeadManager headManager)throws ResourseNotFoundException;
	
	public boolean deleteHeadManager(long headManagerId);
	
	public HeadManager loginHeadManager(HeadManager headManager);
	
}
