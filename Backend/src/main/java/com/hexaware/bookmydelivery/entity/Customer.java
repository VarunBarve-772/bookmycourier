package com.hexaware.bookmydelivery.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@Column(name="custId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long custId;
	
	@Column(name="custName")
	private String custName;
	
	@Column(name="custDob")
	private Date custDOB = new Date();
	
	@Column(name="custEmail")
	private String custEmail;
	
	@Column(name="custMobile")
	private String custMobile;
	
	@Column(name="custAdd")
	private String custAdd;
	
	@Column(name="custPass")
	private String custPass;
	
	@Column(name="custWallet")
	private float custWallet;
	
	@Column(name="custPin")
	private int custPin;
	
	public Customer() {
		// TODO Auto-generated constructor stub
	}

	public Customer(Long custId, String custName, Date custDOB, String custEmail, String custMobile, String custAdd,
			String custPass, float custWallet, int custPin) {
		super();
		this.custId = custId;
		this.custName = custName;
		this.custDOB = custDOB;
		this.custEmail = custEmail;
		this.custMobile = custMobile;
		this.custAdd = custAdd;
		this.custPass = custPass;
		this.custWallet = custWallet;
		this.custPin = custPin;
	}

	public Long getCustId() {
		return custId;
	}

	public void setCustId(Long custId) {
		this.custId = custId;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public Date getCustDOB() {
		return custDOB;
	}

	public void setCustDOB(Date custDOB) {
		this.custDOB = custDOB;
	}

	public String getCustEmail() {
		return custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	public String getCustMobile() {
		return custMobile;
	}

	public void setCustMobile(String custMobile) {
		this.custMobile = custMobile;
	}

	public String getCustAdd() {
		return custAdd;
	}

	public void setCustAdd(String custAdd) {
		this.custAdd = custAdd;
	}

	public String getCustPass() {
		return custPass;
	}

	public void setCustPass(String custPass) {
		this.custPass = custPass;
	}

	public float getCustWallet() {
		return custWallet;
	}

	public void setCustWallet(float custWallet) {
		this.custWallet = custWallet;
	}

	public int getCustPin() {
		return custPin;
	}

	public void setCustPin(int custPin) {
		this.custPin = custPin;
	}

	@Override
	public String toString() {
		return "Customer [custId=" + custId + ", custName=" + custName + ", custDOB=" + custDOB + ", custEmail="
				+ custEmail + ", custMobile=" + custMobile + ", custAdd=" + custAdd + ", custPass=" + custPass
				+ ", custWallet=" + custWallet + ", custPin=" + custPin + "]";
	}
	

}
