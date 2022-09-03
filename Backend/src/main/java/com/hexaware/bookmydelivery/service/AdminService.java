package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.Admin;
import com.hexaware.bookmydelivery.repository.AdminRepository;

@Service
public class AdminService implements IAdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public List<Admin> getAllAdmins() {
		
		return adminRepository.findAll();
	}

	@Override
	public Optional<Admin> getAdminByID(long adminId) {

		return adminRepository.findById(adminId);
	}

	@Override
	public boolean saveAdmin(Admin admin) {
		try {
			adminRepository.save(admin);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Admin updateAdmin(Admin admin) {
		return adminRepository.save(admin);
	}

	@Override
	public boolean deleteAdmin(long adminId) {
		try {
			adminRepository.deleteById(adminId);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
