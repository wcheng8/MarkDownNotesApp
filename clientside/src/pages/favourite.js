import React from "react";
import { Row, Col } from "reactstrap";
import Blogcard from "./cards/Blogcard";
import DashBoardPagination from "../components/DashBoardPagination";

const Favourites = () => {
	return (
		<div>
			<div className="d-flex justify-content-center">
				<h1 className="pt-5 pb-5">Favourites</h1>
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
			<DashBoardPagination />
		</div>
	);
};

export default Favourites;
