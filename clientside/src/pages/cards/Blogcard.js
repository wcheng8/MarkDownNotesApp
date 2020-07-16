import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";

const Blogcard = () => {
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
					<h2 className="font-weight-bold pb-2">Card title</h2>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</CardText>
					<Button color="primary">See Post!</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default Blogcard;
