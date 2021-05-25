package com.springexample.springexample.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springexample.springexample.Doa.CourseDao;
import com.springexample.springexample.entities.Course;


@Service
public class CourseServiceimpl implements CourseService {
	
	
	@Autowired
	private CourseDao courseDao;
	
//	List<Course>list;
	
	public CourseServiceimpl() {
//		list= new ArrayList<>();
//		list.add(new Course(145,"java","this course contains basic of java"));
//		list.add(new Course (123,"Spring boot","create rest api"));
//		
	}
	
    @Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}

    
    @Override
    public Course getCourse(long courseId) {
    	
//    	Course c=null;
//    	 
//    	for(Course course:list)
//    	{
//    		if(course.getId()== courseId)
//    		{
//    			c= course;
//    			break;
//    		}
//    	}
	   return courseDao.getOne(courseId);
    	
    	
    }

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
		
//		list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
		
//		list.forEach (e -> 
//		{
//			
//		if(e.getId()== course.getId());
//		
//		e.setTitle(course.getTitle());
//		e.setDescription(course.getDescription());
//		});
		
		courseDao.save(course);
		return course;
	}
    
	@Override
	public void deleteCourse(long parseLong) {
//		list=this.list.stream().filter(e ->e.getId() !=parseLong) .collect(Collectors.toList());
		 Course entity =courseDao.getOne(parseLong);
		courseDao.delete(entity);
		
	}
    
}
