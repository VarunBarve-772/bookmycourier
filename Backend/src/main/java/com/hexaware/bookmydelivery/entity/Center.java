package com.hexaware.bookmydelivery.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
	
	@Column(name="centerPin")
	private int centerPin;
	
	@Column(name="centerPrice")
	private float centerPrice;

	
	public Center() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Center(Long centerId, String centerName, String centerPhone, int centerPin, float centerPrice) {
		super();
		this.centerId = centerId;
		this.centerName = centerName;
		this.centerPhone = centerPhone;
		this.centerPin = centerPin;
		this.centerPrice = centerPrice;
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
				+ ", centerPin=" + centerPin + ", centerPrice=" + centerPrice + "]";
	}
	
	
}
