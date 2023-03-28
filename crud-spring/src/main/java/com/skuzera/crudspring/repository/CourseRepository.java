package com.skuzera.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skuzera.crudspring.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}