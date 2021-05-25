import React, { Fragment } from 'react';
import { Form } from 'reactstrap';
import { FormGroup, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
const UpdateCourse = (id) => {
	axios
		.delete(`${base_url}/courses/${id}`)
		.then(function(response) {
			// console.log('Get API CALLED BEFORE');

			// handle success
			// Mycourses = response.data;
			// console.log(response.data);
			// console.log('Get API CALLED AFTER', Mycourses);
			toast.success('course updated');
			// setCourses(response.data);
			update(id);
		})
		.catch(function(error) {
			// handle error
			// console.log('error');
			toast.error('somethimg went wrong');
		});

	return (
		<Fragment>
			<h1 className="text-center my-3">Update course detail</h1>
			<Form>
				<FormGroup>
					<lable for="userId">Course Id</lable>
					<Input type="number" placeholder="enter here" name="userId" id="userId" />
				</FormGroup>
				<FormGroup>
					<lable for="title">Course title</lable>
					<Input type="text" placeholder="enter title here" id="title" />
				</FormGroup>
				<FormGroup>
					<lable for="description">Course description</lable>
					<Input
						type="textarea"
						placeholder="enter description here"
						id="description"
						style={{ height: 150 }}
					/>
				</FormGroup>

				{/* <Container>
					<Button color="success">Add Course</Button>
					<Button color="warning" ml-2>
						Clear
					</Button>
				</Container> */}
				<Container className="text-center">
					<Button
						color="success"
						onClick={() => {
							updateCourse(course.id);
						}}
					>
						Update Course
					</Button>
					<Button color="warning ml-3">Clear</Button>
				</Container>
			</Form>
		</Fragment>
	);
};

export default UpdateCourse;
