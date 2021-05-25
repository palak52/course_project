import React, { useEffect } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
	useEffect(() => {
		document.title = 'Home';
	}, []);
	return (
		<div>
			<Jumbotron className="text-center" bg-color="#DDF909">
				<h1>Learn code with Palak.</h1>
				<p>hi let's learn new skills from us.</p>
				<Container>
					<Button color="primary" outline>
						{' '}
						Start Learning
					</Button>
				</Container>
			</Jumbotron>
		</div>
	);
};
export default Home;
