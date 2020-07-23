import React, { useState } from "react";
import {
	Button,
	Popover,
	PopoverHeader,
	PopoverBody,
	Col,
	Row,
	Container,
} from "reactstrap";
import { Link } from "react-router-dom";

const MDbriefsheet = (props) => {
	const [popoverOpen, setPopoverOpen] = useState(false);

	const toggle = () => setPopoverOpen(!popoverOpen);

	return (
		<div>
			<Button id="Popover1" type="button">
				MD Sheets
			</Button>
			<Popover
				placement="bottom"
				isOpen={popoverOpen}
				target="Popover1"
				toggle={toggle}
			>
				<PopoverHeader className="text-primary">MD Cheatsheet</PopoverHeader>
				<PopoverBody>
					<Container>
						<Row>
							<Col className="col-3"># H1</Col>
							<Col className="col-4">*italics*</Col>
							<Col className="col-5">**bold**</Col>
						</Row>
						<Row>
							<Col className="col-6">~~strike~~</Col>
							<Col className="col-6">1. # List</Col>
						</Row>
						<Row>
							<Col>- Unordered List</Col>
						</Row>
						<Row>
							<Col>[Link Name](link-url)</Col>
						</Row>
						<Row>
							<Col>![alt text for Pictures](image-url)</Col>
						</Row>
						<Row>
							<Col>``javascript ```</Col>
						</Row>
						<Row>
							<Col>--- horizontal rule</Col>
						</Row>
						<Link to="/about">...More</Link>
					</Container>
				</PopoverBody>
			</Popover>
		</div>
	);
};

export default MDbriefsheet;
