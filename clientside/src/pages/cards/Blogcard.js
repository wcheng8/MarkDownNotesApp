import React, { useState } from "react";
import axios from "axios";
import { Card, CardText, CardBody, CardSubtitle, Button } from "reactstrap";

const Blogcard = ({ title, content, id }) => {
	const [data, setData] = useState("");
	const buttonClick = () => {
		console.log(id);
		const getPosts = axios
			.get(`http://localhost:5000/api/notes/${id}`)
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Card data-id={id}>
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
						<Button onClick={buttonClick} color="primary">
							See Post!
						</Button>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Blogcard;
