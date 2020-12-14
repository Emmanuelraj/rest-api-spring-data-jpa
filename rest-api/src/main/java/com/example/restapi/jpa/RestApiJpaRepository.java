/**
 * 
 */
package com.example.restapi.jpa;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.restapi.model.UserDto;

/**
 * @author Admin
 *
 */
public interface RestApiJpaRepository extends JpaRepository<UserDto, Integer> {

	Optional<UserDto> findByEmail(String email);

	
	
	
}
