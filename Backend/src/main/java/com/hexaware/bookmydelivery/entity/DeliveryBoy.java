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
@Table(name="deliveryboy")
public class DeliveryBoy {

	
	@Id
	@Column(name="deliveryBoyId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long deliveryBoyId;
	
	@Column(name="deliveryBoyName")
	private String deliveryBoyName;
	
	@Column(name="deliveryBoyEmail")
	private String deliveryBoyEmail;
	
	@Column(name="deliveryBoyMobile")
	private String deliveryBoyMobile;
	
	@Column(name="deliveryusername", nullable = false, unique=true)
	private String deliveryBoyUsername;
	
	@Column(name="deliveryBoyPass")
	private String deliveryBoyPass;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="deliveryboy_bookedcourier_fkid",referencedColumnName = "deliveryBoyId")
	Set<BookedCourier> bookedCourier = new HashSet<>();
	
	public DeliveryBoy() {
		// TODO Auto-generated constructor stub
	}


	public Set<BookedCourier> getBookedCourier() {
		return bookedCourier;
	}


	public void setBookedCourier(Set<BookedCourier> bookedCourier) {
		this.bookedCourier = bookedCourier;
	}


	public DeliveryBoy(Long deliveryBoyId, String deliveryBoyName, String deliveryBoyEmail, String deliveryBoyMobile,
			String deliveryBoyUsername, String deliveryBoyPass, Set<BookedCourier> bookedCourier) {
		super();
		this.deliveryBoyId = deliveryBoyId;
		this.deliveryBoyName = deliveryBoyName;
		this.deliveryBoyEmail = deliveryBoyEmail;
		this.deliveryBoyMobile = deliveryBoyMobile;
		this.deliveryBoyUsername = deliveryBoyUsername;
		this.deliveryBoyPass = deliveryBoyPass;
		this.bookedCourier = bookedCourier;
	}


	public String getDeliveryBoyUsername() {
		return deliveryBoyUsername;
	}

	public void setDeliveryBoyUsername(String deliveryBoyUsername) {
		this.deliveryBoyUsername = deliveryBoyUsername;
	}

	public Long getDeliveryBoyId() {
		return deliveryBoyId;
	}

	public void setDeliveryBoyId(Long deliveryBoyId) {
		this.deliveryBoyId = deliveryBoyId;
	}

	public String getDeliveryBoyName() {
		return deliveryBoyName;
	}

	public void setDeliveryBoyName(String deliveryBoyName) {
		this.deliveryBoyName = deliveryBoyName;
	}

	public String getDeliveryBoyEmail() {
		return deliveryBoyEmail;
	}

	public void setDeliveryBoyEmail(String deliveryBoyEmail) {
		this.deliveryBoyEmail = deliveryBoyEmail;
	}

	public String getDeliveryBoyMobile() {
		return deliveryBoyMobile;
	}

	public void setDeliveryBoyMobile(String deliveryBoyMobile) {
		this.deliveryBoyMobile = deliveryBoyMobile;
	}

	public String getDeliveryBoyPass() {
		return deliveryBoyPass;
	}

	public void setDeliveryBoyPass(String deliveryBoyPass) {
		this.deliveryBoyPass = deliveryBoyPass;
	}


	@Override
	public String toString() {
		return "DeliveryBoy [deliveryBoyId=" + deliveryBoyId + ", deliveryBoyName=" + deliveryBoyName
				+ ", deliveryBoyEmail=" + deliveryBoyEmail + ", deliveryBoyMobile=" + deliveryBoyMobile
				+ ", deliveryBoyUsername=" + deliveryBoyUsername + ", deliveryBoyPass=" + deliveryBoyPass
				+ ", bookedCourier=" + bookedCourier + "]";
	}

	
}
