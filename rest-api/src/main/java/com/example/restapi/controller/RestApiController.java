package com.example.restapi.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.restapi.config.RestApiConfiguration;
import com.example.restapi.exception.ResourceNotFoundException;
import com.example.restapi.jpa.RestApiJpaRepository;
import com.example.restapi.model.UserDto;



@RestController
@RequestMapping("/rest-api")
@CrossOrigin
public class RestApiController 
{

	//calling service class
	@Autowired
	private RestApiConfiguration apiConfiguration;
	
	
	@Autowired
	private RestApiJpaRepository restApiJpaRespository;
	
	
	
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
	public ResponseEntity<UserDto> updateDataById(@PathVariable int id,@RequestBody UserDto userDetails)
	{
		System.out.println("update Data method"+id);
		
		UserDto userDto = restApiJpaRespository.findById(id)
				.orElseThrow(() ->new ResourceNotFoundException("User not exists"+id));
		
		
		userDto.setId(userDetails.getId());
		userDto.setEmail(userDetails.getEmail());
		userDto.setFirstName(userDetails.getFirstName());
		userDto.setLastName(userDetails.getLastName());
		userDto.setPassword(userDetails.getPassword());
		
		UserDto updatedUserDetails = restApiJpaRespository.save(userDto);
		
		return ResponseEntity.ok(updatedUserDetails);
				
	}
	
	/**
	@RequestMapping(value = "/viewById", method = RequestMethod.GET)
	public Optional<UserDto> getPriorityStories(@RequestParam("email") String email) 
	{
		System.out.println("viewById"+email);
		return this.apiConfiguration.findByEmail(email);
		
	}*/
		
	@GetMapping("/viewById/{email}")
	public ResponseEntity<UserDto> viewByEmail(@PathVariable("email")String email)
	{
		System.out.println("viewById"+email);
		//return this.apiConfiguration.findByEmail(email);
		
		UserDto user = apiConfiguration.findByEmail(email)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with email :" + email));
		return ResponseEntity.ok(user);
	}
	
	
	@GetMapping(value="/deleteById/{id}")//,produces = "application/json")
	public Optional<UserDto> deleteById(@PathVariable("id")int id)
	{
		System.out.println("deleteById"+id);
		
		this.apiConfiguration.deleteById(id);
		
		return this.apiConfiguration.findById(id);
		
	}
	
	
	
}
