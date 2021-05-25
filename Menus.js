import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () => {
	return (
		<ListGroup>
			<Link className="list-group-item list-group-item-action" tag="a" to="/" action="true">
				Home
			</Link>
			<Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action="true">
				Add Course
			</Link>
			<Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action="true">
				View Courses
			</Link>
			<Link className="list-group-item list-group-item-action" tag="a" to="/about" action="true">
				About
			</Link>
			<Link className="list-group-item list-group-item-action" tag="a" to="/contactUs" action="true">
				Contact Us
			</Link>
		</ListGroup>
	);
};

export default Menus;
