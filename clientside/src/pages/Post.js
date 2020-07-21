import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

const Post = () => {
	const [state, setState] = useState({
		posttitle: "",
		postcontent: "",
	});
	const [isSubmitform, setIsSubmitform] = useState(false);

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
					setIsSubmitform(true);
					console.log("Post has been submitted to server! Redirecting!");
				}
			});
	};
	if (isSubmitform) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div>
			<Form onSubmit={submitForm}>
				<FormGroup>
					<Label for="posttitle">Post Title</Label>
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
						name="postcontent"
						id="blogtext"
						onChange={handleChange}
					/>
				</FormGroup>
				<Button>Post</Button>
			</Form>
		</div>
	);
};

export default Post;
