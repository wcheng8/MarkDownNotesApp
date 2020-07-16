import React from "react";
import { Row, Col } from "reactstrap";
import Blogcard from "../cards/Blogcard";

const MyNotes = () => {
	return (
		<div>
			<div className="d-flex justify-content-center">
				<h1 className="pt-5 pb-5">My Notes</h1>
			</div>
			<Row>
				<Col>
					<Blogcard />
				</Col>
				<Col>
					<Blogcard />
				</Col>
				<Col>
					<Blogcard />
				</Col>
			</Row>
			<Row className="pt-5">
				<Col>
					<Blogcard />
				</Col>
				<Col>
					<Blogcard />
				</Col>
				<Col>
					<Blogcard />
				</Col>
			</Row>
			<Row className="pt-5">
				<Col>
					<Blogcard />
				</Col>
				<Col>
					<Blogcard />
				</Col>
				<Col>
					<Blogcard />
				</Col>
			</Row>
		</div>
	);
};

export default MyNotes;
