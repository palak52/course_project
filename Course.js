import React from 'react';

import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container } from 'reactstrap';
import axios from 'axios';
import base_url from './../Api/BootApi';
import { toast } from 'react-toastify';
const Course = ({ course, update }) => {
	const deleteCourse = (id) => {
		axios
			.delete(`${base_url}/courses/${id}`)
			.then(function(response) {
				// console.log('Get API CALLED BEFORE');

				// handle success
				// Mycourses = response.data;
				// console.log(response.data);
				// console.log('Get API CALLED AFTER', Mycourses);
				toast.success('course deleted');
				// setCourses(response.data);
				update(id);
			})
			.catch(function(error) {
				// handle error
				// console.log('error');
				toast.error('somethimg went wrong');
			});
	};

	return (
		<Card className="text-center">
			<CardBody>
				<CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
				<CardText>{course.description}</CardText>
				<Container className="text-center">
					<Button
						color="danger"
						onClick={() => {
							deleteCourse(course.id);
						}}
					>
						Delete
					</Button>
					{/* <Button color="warning ml-3">Update</Button> */}
				</Container>
			</CardBody>
		</Card>
	);
};
export default Course;
