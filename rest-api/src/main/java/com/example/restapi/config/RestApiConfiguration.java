/**
 * 
 */
package com.example.restapi.config;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.restapi.jpa.RestApiJpaRepository;
import com.example.restapi.model.UserDto;

/**
 * @author Admin
 *
 */
@Service
public class RestApiConfiguration
{

	@Autowired
	private RestApiJpaRepository jpaRepository;
		
	/**
	 * 
	 * @return
	 */
	public List<UserDto> findAllData()
	{
		
		System.out.println("findAll over");
		return this.jpaRepository.findAll();
	}
	
	
	
	
	public void saveData(UserDto user)
	{
		System.out.println("save Data into repo from service");
	    
		this.jpaRepository.save(user);
	}




	public List<UserDto> findById(int id) {
		// TODO Auto-generated method stub
		return this.jpaRepository.findById(id);
	}




	public void deleteById(int id) {
		// TODO Auto-generated method stub
		 this.jpaRepository.deleteById(id);
	}
	
	
	
	
}
