package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.Admin;

public interface IAdminService {
	
	public List<Admin> getAllAdmins();
	
	public Optional<Admin> getAdminByID(long adminId);
	
	public boolean saveAdmin(Admin admin);
	
	public Admin updateAdmin(Admin admin);
	
	public boolean deleteAdmin(long adminId);
	
	
}
