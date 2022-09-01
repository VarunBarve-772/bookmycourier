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
	@Column(name="centerid")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long centerId;
	
	@Column(name="centername")
	private String centerName;
	
	@Column(name="centerphone")
	private String centerPhone;
	
	
	@Column(name="centerpin")
	private int centerPin;
	
	@Column(name="centerprice")
	private float centerPrice;
	

}
