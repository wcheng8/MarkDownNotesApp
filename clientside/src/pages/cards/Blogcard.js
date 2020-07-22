import React from "react";
import { Card, CardText, CardBody, CardSubtitle, Button } from "reactstrap";

const Blogcard = ({ title, content }) => {
	return (
		<div>
			<Card>
				{/* <CardImg
					top
					width="100%"
					src="/assets/318x180.svg"
					alt="Card image cap"
				/> */}
				<CardBody>
					<h2 className="font-weight-bold pb-2">{title}</h2>
					<CardSubtitle>{title}</CardSubtitle>
					<CardText>{content}</CardText>
					<div className="d-flex justify-content-center">
						<Button color="primary">See Post!</Button>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Blogcard;
