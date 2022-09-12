package com.hexaware.bookmydelivery.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="headmanager")
public class HeadManager implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name="headManagerId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long headManagerId;
	@Column(name="headManagerName")
	private String headManagerName;
	@Column(name="headManagerMail")
	private String headManagerEmail;
	@Column(name="headManagerMobile")
	private String headManagerMobile;
	@Column(name="headManagerUsername", nullable = false, unique=true)
	private String headManagerUsername;
	@Column(name="headManagerPass")
	private String headManagerPass;
	
		
	public HeadManager() {
		// TODO Auto-generated constructor stub
	}


	public HeadManager(Long headManagerId, String headManagerName, String headManagerEmail, String headManagerMobile,
			String headManagerUsername, String headManagerPass) {
		super();
		this.headManagerId = headManagerId;
		this.headManagerName = headManagerName;
		this.headManagerEmail = headManagerEmail;
		this.headManagerMobile = headManagerMobile;
		this.headManagerUsername = headManagerUsername;
		this.headManagerPass = headManagerPass;
	}


	public Long getHeadManagerId() {
		return headManagerId;
	}


	public void setHeadManagerId(Long headManagerId) {
		this.headManagerId = headManagerId;
	}


	public String getHeadManagerName() {
		return headManagerName;
	}


	public void setHeadManagerName(String headManagerName) {
		this.headManagerName = headManagerName;
	}


	public String getHeadManagerEmail() {
		return headManagerEmail;
	}


	public void setHeadManagerEmail(String headManagerEmail) {
		this.headManagerEmail = headManagerEmail;
	}


	public String getHeadManagerMobile() {
		return headManagerMobile;
	}


	public void setHeadManagerMobile(String headManagerMobile) {
		this.headManagerMobile = headManagerMobile;
	}


	public String getHeadManagerUsername() {
		return headManagerUsername;
	}


	public void setHeadManagerUsername(String headManagerUsername) {
		this.headManagerUsername = headManagerUsername;
	}


	public String getHeadManagerPass() {
		return headManagerPass;
	}


	public void setHeadManagerPass(String headManagerPass) {
		this.headManagerPass = headManagerPass;
	}


	@Override
	public String toString() {
		return "HeadManager [headManagerId=" + headManagerId + ", headManagerName=" + headManagerName
				+ ", headManagerEmail=" + headManagerEmail + ", headManagerMobile=" + headManagerMobile
				+ ", headManagerUsername=" + headManagerUsername + ", headManagerPass=" + headManagerPass + "]";
	}

}
