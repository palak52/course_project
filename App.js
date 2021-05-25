import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';
import AllCourses from './component/AllCourses';
import AddCourse from './component/AddCourse';
import { Container, Row, Col } from 'reactstrap';
// import UpdateCourse from './component/Update';
import Header from './component/Header';
import Menus from './component/Menus';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(req, res, next) {
	const btnHandle = () => {
		toast('this is my first message');

		res.header('Access-Control-Allow-Origin', 'http://localhost:9090');
		res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
		next();
	};
	// Origin, X-Requested-With, Content-Type, Accept
	return (
		<div>
			<Router>
				<ToastContainer />

				<Container>
					<Header />
					<Row>
						<Col md={4}>
							<Menus />
						</Col>
						<Col md={8}>
							<Route path="/" component={Home} exact />
							<Route path="/add-course" component={AddCourse} exact />
							<Route path="/view-courses" component={AllCourses} exact />
						</Col>
					</Row>
				</Container>
			</Router>
		</div>
	);
}

export default App;
