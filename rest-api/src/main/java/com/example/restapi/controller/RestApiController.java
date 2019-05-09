package com.example.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restapi.config.RestApiConfiguration;
import com.example.restapi.model.UserDto;



@RestController
@RequestMapping("/rest-api")
public class RestApiController 
{

	//calling service class
	@Autowired
	private RestApiConfiguration apiConfiguration;
	
	
	
	@GetMapping("/all")
	public List<UserDto> getViewAll()
	{
		return this.apiConfiguration.findAllData();
	}
	

	@PostMapping("/save")
	public  String saveData(@RequestBody final UserDto user)
	{
		System.out.println("saveData andretrieve");
		
		this.apiConfiguration.saveData(user);
		return  "record saved";
	}
	
	
	
	@PutMapping("/editById/{id}")
	public String updateDataById(@RequestBody UserDto userDto,@PathVariable("id")final Integer id)
	{
		System.out.println("update Data method");
		
		
		//first findById
	      List<UserDto> ls = this.apiConfiguration.findById(id);
		
	      
	      
	      for(UserDto s: ls)
	      {
	    	  s.setId(userDto.getId());
	    	  s.setUsername(userDto.getUsername());
	    	  s.setSalary(userDto.getSalary());
	    	  
	    	  //save updated data into db
	    	  this.apiConfiguration.saveData(s);
	      }
	      
	      
	     
	      
		
		return "record UpdateById";
		
	}
	
	
	@GetMapping("/viewById/{id}")
	public List<UserDto> viewById(@RequestBody UserDto user,@PathVariable("id")int id)
	{
		System.out.println("viewById"+id);
		
		return this.apiConfiguration.findById(id);
	}
	
	
	@DeleteMapping(value="/deleteById/{id}",produces = "application/json")
	public List<UserDto> deleteById(@PathVariable("id")int id)
	{
		System.out.println("deleteById"+id);
		
		this.apiConfiguration.deleteById(id);
		
		return this.apiConfiguration.findById(id);
		
	}
	
	
	
}
