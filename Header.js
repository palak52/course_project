import React from 'react';
import { Card, CardBody } from 'reactstrap';

function Header({ name, title }) {
	return (
		<div>
			<Card className={'my-2 bg-warning'}>
				<CardBody>
					<h1 className="text-center my-4">Welcome To Courses Application.</h1>
				</CardBody>
			</Card>
		</div>
	);
}
export default Header;
