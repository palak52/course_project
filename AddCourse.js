import React, { useEffect, Fragment, useState } from 'react';
import { Form } from 'reactstrap';
import { FormGroup, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import base_url from './../Api/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';
const AddCourse = () => {
	useEffect(() => {
		document.title = 'Add courses';
	}, []);

	const [ course, setCourse ] = useState({});
	// form handeler function
	const handleForm = (e) => {
		console.log(course);
		postDataToServer(course);
		e.preventDefault();
	};

	// create a function to post data on server
	const postDataToServer = (data) => {
		axios
			.post(`${base_url}/courses`, data)
			.then(function(response) {
				console.log(response.data);
				console.log('succsess');
				// console.log('Get API CALLED AFTER', Mycourses);
				toast.success('Course added successfully');
				// setCourses(response.data);
			})
			.catch(function(error) {
				// handle error
				console.log('error');
				toast.error('somethimg went wrong');
			});
	};
	return (
		<Fragment>
			<h1 className="text-center my-3">fill course detail</h1>
			<Form onSubmit={handleForm}>
				<FormGroup>
					<lable for="userId">Course Id</lable>
					<Input
						type="number"
						placeholder="enter here"
						name="userId"
						id="userId"
						onChange={(e) => {
							setCourse({ ...course, id: e.target.value });
						}}
					/>
				</FormGroup>
				<FormGroup>
					<lable for="title">Course title</lable>
					<Input
						type="text"
						placeholder="enter title here"
						id="title"
						onChange={(e) => {
							setCourse({ ...course, title: e.target.value });
						}}
					/>
				</FormGroup>
				<FormGroup>
					<lable for="description">Course description</lable>
					<Input
						type="textarea"
						placeholder="enter description here"
						id="description"
						style={{ height: 150 }}
						onChange={(e) => {
							setCourse({ ...course, description: e.target.value });
						}}
					/>
				</FormGroup>
				{/* <Container>
					<Button color="success">Add Course</Button>
					<Button color="warning" ml-2>
						Clear
					</Button>
				</Container> */}
				<Container className="text-center">
					<Button type="submit" color="success">
						Add Course
					</Button>
					<Button
						type="reset"
						color="warning ml-3"
						// onClick={() => {
						// 	setCourse({});
						// }}
					>
						Clear
					</Button>
				</Container>
			</Form>
		</Fragment>
	);
};

export default AddCourse;
