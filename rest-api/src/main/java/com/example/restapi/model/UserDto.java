/**
 * 
 */
package com.example.restapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author Admin
 * 
 */


@Entity

public class UserDto
{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private  Integer id;
	
	
	private String username;
	
	private  Long salary;
	
	
	

	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the salary
	 */
	public Long getSalary() {
		return salary;
	}

	/**
	 * @param salary the salary to set
	 */
	public void setSalary(Long salary) {
		this.salary = salary;
	}

	
	public UserDto() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param username
	 * @param salary
	 */
	public UserDto(String username, Long salary) {
		super();
		this.username = username;
		this.salary = salary;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "UserDto [id=" + id + ", username=" + username + ", salary="
				+ salary + "]";
	}
	
	
	
	
	
	
	

}
