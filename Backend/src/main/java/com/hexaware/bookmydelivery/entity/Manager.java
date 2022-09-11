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
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="manager")
public class Manager {
	
	@Id
	@Column(name="managerId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long managerId;
	@Column(name="managerName")
	private String managerName;
	@Column(name="managerEmail")
	private String managerEmail;
	@Column(name="managerMobile")
	private String managerMobile;
	@Column(name="managerusername", nullable = false, unique=true)
	private String managerUsername;
	@Column(name="managerPass")
	private String managerPass;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="center_details_fkid")
	private Center center;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="manager_deliveryboy_fkid",referencedColumnName = "managerId")
	Set<DeliveryBoy> deliveryboy = new HashSet<>();

	
	public Manager() {
		// TODO Auto-generated constructor stub
	}


	public Manager(Long managerId, String managerName, String managerEmail, String managerMobile,
			String managerUsername, String managerPass, Center center, Set<DeliveryBoy> deliveryboy) {
		super();
		this.managerId = managerId;
		this.managerName = managerName;
		this.managerEmail = managerEmail;
		this.managerMobile = managerMobile;
		this.managerUsername = managerUsername;
		this.managerPass = managerPass;
		this.center = center;
		this.deliveryboy = deliveryboy;
	}


	public String getManagerUsername() {
		return managerUsername;
	}


	public void setManagerUsername(String managerUsername) {
		this.managerUsername = managerUsername;
	}


	public Set<DeliveryBoy> getDeliveryboy() {
		return deliveryboy;
	}


	public void setDeliveryboy(Set<DeliveryBoy> deliveryboy) {
		this.deliveryboy = deliveryboy;
	}


	public Long getManagerId() {
		return managerId;
	}


	public void setManagerId(Long managerId) {
		this.managerId = managerId;
	}


	public String getManagerName() {
		return managerName;
	}


	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}


	public String getManagerEmail() {
		return managerEmail;
	}


	public void setManagerEmail(String managerEmail) {
		this.managerEmail = managerEmail;
	}


	public String getManagerMobile() {
		return managerMobile;
	}


	public void setManagerMobile(String managerMobile) {
		this.managerMobile = managerMobile;
	}


	public String getManagerPass() {
		return managerPass;
	}


	public void setManagerPass(String managerPass) {
		this.managerPass = managerPass;
	}


	public Center getCenter() {
		return center;
	}


	public void setCenter(Center center) {
		this.center = center;
	}


	@Override
	public String toString() {
		return "Manager [managerId=" + managerId + ", managerName=" + managerName + ", managerEmail=" + managerEmail
				+ ", managerMobile=" + managerMobile + ", managerUsername=" + managerUsername + ", managerPass="
				+ managerPass + ", center=" + center + ", deliveryboy=" + deliveryboy + "]";
	}

	
}
