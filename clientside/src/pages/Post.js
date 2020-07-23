import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import MDbriefsheet from "../components/MDbriefsheet";

const Post = (props) => {
	const [state, setState] = useState({
		posttitle: "",
		postcontent: "",
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const submitForm = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/notes", {
				title: state.posttitle,
				content: state.postcontent,
			})
			.then((res) => {
				if (res.status === 200) {
					console.log("Post has been submitted to server! Redirecting!");
				}
				props.history.push("/dashboard");
			});
	};

	return (
		<div>
			<Row>
				<Col className="col-4">
					<h1>Post!</h1>
				</Col>
				<Col className="col-4">
					<MDbriefsheet />
				</Col>

				<Col className="col-4">
					<p>Preview</p>
				</Col>
			</Row>
			<Form onSubmit={submitForm}>
				<FormGroup>
					<Input
						type="text"
						value={state.posttitle}
						name="posttitle"
						id="posttitle"
						placeholder="Title of Post"
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="postcontent"></Label>
					<Input
						type="textarea"
						value={state.postcontent}
						style={{ height: 700 }}
						placeholder="Write posts in Markdown..."
						name="postcontent"
						id="blogtext"
						onChange={handleChange}
					/>
				</FormGroup>
				<Button type="submit">Post</Button>
			</Form>
		</div>
	);
};

export default Post;
