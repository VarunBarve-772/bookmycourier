package com.hexaware.bookmydelivery.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {

	@Id
	@Column(name="adminId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long adminId;
	@Column(name="adminName")
	private String adminName;
	@Column(name="admineMail")
	private String adminEmail;
	@Column(name="adminMobile")
	private String adminMobile;
	@Column(name="adminusername", nullable = false, unique=true)
	private String adminUsername;
	@Column(name="adminPass")
	private String adminPass;
	
		
	public Admin() {
		// TODO Auto-generated constructor stub
	}

	public Admin(Long adminId, String adminName, String adminEmail, String adminMobile, String adminUsername,
			String adminPass) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.adminMobile = adminMobile;
		this.adminUsername = adminUsername;
		this.adminPass = adminPass;
	}

	public String getAdminUsername() {
		return adminUsername;
	}

	public void setAdminUsername(String adminUsername) {
		this.adminUsername = adminUsername;
	}

	public Long getAdminId() {
		return adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getAdminMobile() {
		return adminMobile;
	}

	public void setAdminMobile(String adminMobile) {
		this.adminMobile = adminMobile;
	}

	public String getAdminPass() {
		return adminPass;
	}

	public void setAdminPass(String adminPass) {
		this.adminPass = adminPass;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminName=" + adminName + ", adminEmail=" + adminEmail
				+ ", adminMobile=" + adminMobile + ", adminUsername=" + adminUsername + ", adminPass=" + adminPass
				+ "]";
	}
	
}
