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
@Table(name="center")
public class Center {
	
	@Id
	@Column(name="centerId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long centerId;
	
	@Column(name="centerName")
	private String centerName;
	
	@Column(name="centerPhone")
	private String centerPhone;
	
	@Column(name="centerPin", nullable = false, unique=true)
	private int centerPin;
	
	@Column(name="centerPrice")
	private float centerPrice;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="center_deliveryboy_fkid",referencedColumnName = "centerId")
	Set<DeliveryBoy> deliveryboy = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="center_bookedcourier_fkid",referencedColumnName = "centerId")
	Set<BookedCourier> bookedCourier = new HashSet<>();


	public Center() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Center(Long centerId, String centerName, String centerPhone, int centerPin, float centerPrice,
			Set<DeliveryBoy> deliveryboy, Set<BookedCourier> bookedCourier) {
		super();
		this.centerId = centerId;
		this.centerName = centerName;
		this.centerPhone = centerPhone;
		this.centerPin = centerPin;
		this.centerPrice = centerPrice;
		this.deliveryboy = deliveryboy;
		this.bookedCourier = bookedCourier;
	}


	public Set<BookedCourier> getBookedCourier() {
		return bookedCourier;
	}


	public void setBookedCourier(Set<BookedCourier> bookedCourier) {
		this.bookedCourier = bookedCourier;
	}


	public Set<DeliveryBoy> getDeliveryboy() {
		return deliveryboy;
	}

	public void setDeliveryboy(Set<DeliveryBoy> deliveryboy) {
		this.deliveryboy = deliveryboy;
	}

	public Long getCenterId() {
		return centerId;
	}

	public void setCenterId(Long centerId) {
		this.centerId = centerId;
	}

	public String getCenterName() {
		return centerName;
	}

	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}

	public String getCenterPhone() {
		return centerPhone;
	}

	public void setCenterPhone(String centerPhone) {
		this.centerPhone = centerPhone;
	}

	public int getCenterPin() {
		return centerPin;
	}

	public void setCenterPin(int centerPin) {
		this.centerPin = centerPin;
	}

	public float getCenterPrice() {
		return centerPrice;
	}

	public void setCenterPrice(float centerPrice) {
		this.centerPrice = centerPrice;
	}


	@Override
	public String toString() {
		return "Center [centerId=" + centerId + ", centerName=" + centerName + ", centerPhone=" + centerPhone
				+ ", centerPin=" + centerPin + ", centerPrice=" + centerPrice + ", deliveryboy=" + deliveryboy
				+ ", bookedCourier=" + bookedCourier + "]";
	}

}
