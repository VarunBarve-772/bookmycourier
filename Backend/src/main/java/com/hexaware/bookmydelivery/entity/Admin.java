package com.hexaware.bookmydelivery.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
	@Column(name="adminPass")
	private String adminPass;
	
	
	//foreing key declaratiion for one to many relationship between admin and manager
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="adminmanager_fkid",referencedColumnName = "adminId")
	Set<Manager> manager = new HashSet<>();
	
	public Admin() {
		// TODO Auto-generated constructor stub
	}

	public Set<Manager> getManager() {
		return manager;
	}

	public void setManager(Set<Manager> manager) {
		this.manager = manager;
	}

	public Admin(String adminName, String adminEmail, String adminMobile, String adminPass, Set<Manager> manager) {
		super();
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.adminMobile = adminMobile;
		this.adminPass = adminPass;
		this.manager = manager;
	}

	public Admin(Long adminId, String adminName, String adminEmail, String adminMobile, String adminPass) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.adminMobile = adminMobile;
		this.adminPass = adminPass;
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
				+ ", adminMobile=" + adminMobile + ", adminPass=" + adminPass + ", manager=" + manager + "]";
	}

		
	
}
