package com.hexaware.bookmydelivery.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="courier_details")
public class BookedCourier {
	
	@Id
	@Column(name="courierId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long courierId;
	@Column(name="courierBookDate")
	private Date courierBookDate;
	@Column(name="courierPickupAdd")
	private String courierPickupAdd;
	@Column(name="courierDeliveryAdd")
	private String courierDeliveryAdd;
	@Column(name="courierPickupDate")
	private Date courierPickupDate;
	@Column(name="courierDeliveryDate")
	private Date courierDeliveryDate;
	@Column(name="courierStatus")
	private String courierStatus;
	
	public Date getCourierBookDate() {
		return courierBookDate;
	}
	public void setCourierBookDate(Date courierBookDate) {
		this.courierBookDate = courierBookDate;
	}
	public String getCourierPickupAdd() {
		return courierPickupAdd;
	}
	public void setCourierPickupAdd(String courierPickupAdd) {
		this.courierPickupAdd = courierPickupAdd;
	}
	public String getCourierDeliveryAdd() {
		return courierDeliveryAdd;
	}
	public void setCourierDeliveryAdd(String courierDeliveryAdd) {
		this.courierDeliveryAdd = courierDeliveryAdd;
	}
	public Date getCourierPickupDate() {
		return courierPickupDate;
	}
	public void setCourierPickupDate(Date courierPickupDate) {
		this.courierPickupDate = courierPickupDate;
	}
	public Date getCourierDeliveryDate() {
		return courierDeliveryDate;
	}
	public void setCourierDeliveryDate(Date courierDeliveryDate) {
		this.courierDeliveryDate = courierDeliveryDate;
	}
	public String getCourierStatus() {
		return courierStatus;
	}
	public void setCourierStatus(String courierStatus) {
		this.courierStatus = courierStatus;
	}

	@Override
	public String toString() {
		return "BookedCourier [courierId=" + courierId + ", courierBookDate=" + courierBookDate + ", courierPickupAdd="
				+ courierPickupAdd + ", courierDeliveryAdd=" + courierDeliveryAdd + ", courierPickupDate="
				+ courierPickupDate + ", courierDeliveryDate=" + courierDeliveryDate + ", courierStatus="
				+ courierStatus + "]";
	}
	
	
	public Long getCourierId() {
		return courierId;
	}
	public void setCourierId(Long courierId) {
		this.courierId = courierId;
	}
	public BookedCourier(Long courierId, Date courierBookDate, String courierPickupAdd, String courierDeliveryAdd,
			Date courierPickupDate, Date courierDeliveryDate, String courierStatus, Long customerId) {
		super();
		this.courierId = courierId;
		this.courierBookDate = courierBookDate;
		this.courierPickupAdd = courierPickupAdd;
		this.courierDeliveryAdd = courierDeliveryAdd;
		this.courierPickupDate = courierPickupDate;
		this.courierDeliveryDate = courierDeliveryDate;
		this.courierStatus = courierStatus;
	}

	public BookedCourier() {
		// TODO Auto-generated constructor stub
	}
	
	
	

}
