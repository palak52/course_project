package com.springexample.springexample.Doa;

import org.springframework.data.jpa.repository.JpaRepository; 


import com.springexample.springexample.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>
{
		
}
