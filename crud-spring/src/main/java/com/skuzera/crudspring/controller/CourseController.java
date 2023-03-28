package com.skuzera.crudspring.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skuzera.crudspring.model.Course;
import com.skuzera.crudspring.repository.CourseRepository;

import java.util.List;

@RestController
@RequestMapping("/api/courses")

public class CourseController {

    private CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping

    public List<Course> list() {
        return courseRepository.findAll();
    }

    @PostMapping
    public void create(@RequestBody Course course) {

        courseRepository.save(course);

    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable("id") String id) {
        Long courseId = Long.parseLong(id);
        courseRepository.deleteById(courseId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course) {
        return courseRepository.findById(id)
                .map(existingCourse -> {
                    existingCourse.setName(course.getName());
                    existingCourse.setCategory(course.getCategory());
                    Course updatedCourse = courseRepository.save(existingCourse);
                    return ResponseEntity.ok().body(updatedCourse);
                }).orElse(ResponseEntity.notFound().build());
    }

}
