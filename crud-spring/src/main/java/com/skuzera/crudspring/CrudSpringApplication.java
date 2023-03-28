package com.skuzera.crudspring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.skuzera.crudspring.model.Course;
import com.skuzera.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Autowired
	private CourseRepository courseRepository;

	@Bean
	public CommandLineRunner initDatabase() {
		return args -> {
			courseRepository.deleteAllInBatch();
	
			Course course = new Course();
			course.setName("angular com spring");
			course.setCategory("front-end");
			courseRepository.save(course);
		};
	}
}