package com.springexample.springexample.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springexample.springexample.entities.Course;
import com.springexample.springexample.services.CourseService;

@RestController
@CrossOrigin
public class MyController {
	
	
	@Autowired
	private CourseService courseService;
	
	
	 
	
	
	@GetMapping("/home")
	public String home()
	{
		return "Welcome to courses application";
	}
 
	
	// get the courses using get
	
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		
		return ( this.courseService).getCourses();
		
	}
	
	// get single course by id using get
	
	@GetMapping("/courses/{CourseId}")
	public Course getCourse(@PathVariable String CourseId)
	{
		return (this.courseService).getCourse(Long.parseLong(CourseId));
	}
	
	//add using post
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseService.addCourse(course);
		
	}
	//update using put

	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.courseService.updateCourse(course);
	}
	
	// delete 
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId) {
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	
} 



