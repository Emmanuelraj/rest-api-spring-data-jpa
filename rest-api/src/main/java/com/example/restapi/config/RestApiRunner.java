/**
 * 
 */
package com.example.restapi.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.example.restapi.jpa.RestApiJpaRepository;
import com.example.restapi.model.UserDto;

/**
 * @author Admin
 *
 */

@Configuration
public class RestApiRunner implements CommandLineRunner
{

	@Autowired
	private RestApiJpaRepository apiJpaRepository;
	/**
	 * for prepopulate datas
	 */
	public void run(String... arg0) throws Exception 
	{
		
		System.out.println("commandLineRunner method");
		
		try {
		// TODO Auto-generated method stub
	    UserDto userDto = new UserDto("imman", 1000L);
	    UserDto userDto1 = new UserDto( "Ajay", 2000L);
	    
	    apiJpaRepository.save(userDto);
		apiJpaRepository.save(userDto1);
		}
		 catch (RuntimeException e) 
			{
				// TODO Auto-generated catch block
			System.out.println("Exception in add default userDefaults"+e.getMessage());
			}
	}

}
