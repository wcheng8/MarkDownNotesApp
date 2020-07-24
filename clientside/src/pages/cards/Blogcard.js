import React from "react";
import { Card, CardText, CardBody, CardSubtitle, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown/with-html";

const Blogcard = ({ title, content, id }) => {
	return (
		<div>
			<Card data-id={id}>
				{/* <CardImg
					top
					width="100%"
					src="/assets/318x180.svg"
					alt="Card image cap"
				/> */}
				<CardHeader className="font-weight-bold pb-2">
					<h3>{title}</h3>
				</CardHeader>
				<CardBody>
					<CardText style={{ maxHeight: "200px" }} className="overflow-hidden">
						<ReactMarkdown source={content} />
					</CardText>
					<div className="d-flex justify-content-center">
						<Link to={`/post/${id}`} className="btn btn-primary">
							See Post!
						</Link>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Blogcard;
