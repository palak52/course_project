// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import Course from './Course';
import base_url from './../Api/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';
// import Async from 'react-async';

const AllCourses = () => {
	// let Mycourses = [];
	useEffect(() => {
		document.title = 'All courses';
	}, []);

	// function to call server(api)
	// console.log(base_url);

	const GetAllCoursesFromServer = () => {
		axios
			.get(`${base_url}/courses`)
			.then(function(response) {
				console.log('Get API CALLED BEFORE');

				// handle success
				// Mycourses = response.data;
				console.log(response.data);
				// console.log('Get API CALLED AFTER', Mycourses);
				toast.success('courses loaded');
				setCourses(response.data);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
				// toast.error('somethimg went wrong');
			});
		// .then(function() {
		// 	console.log('then LAST');
		// 	// always executed
		// 	toast.error('not found');
		// });
	};

	// console.log('api called ALL DONE');

	useEffect(() => {
		GetAllCoursesFromServer();
	}, []);

	const [ courses, setCourses ] = useState([]);

	const updateCourses = (id) => {
		setCourses(courses.filter((c) => c.id != id));
	};

	// console.log('MISTORY DATA MISSING Mycourses', Mycourses);

	return (
		<div>
			<h1>All Courses</h1>
			<p>List of Courses are as follows:</p>

			{courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} />) : 'no courses'}
		</div>
	);
};
export default AllCourses;
