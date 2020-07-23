import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Input } from "reactstrap";

export class EditPosts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: "",
			posttitle: "",
			postcontent: "",
		};
	}

	componentWillMount() {
		this.getSinglePostDetails();
	}
	getSinglePostDetails() {
		let postId = this.props.match.params.id;
		console.log(postId);
		axios
			.get(`http://localhost:5000/api/notes/${postId}`)
			.then((res) => {
				this.setState(
					{
						id: res.data._id,
						posttitle: res.data.title,
						postcontent: res.data.content,
					},
					() => {
						console.log(this.state);
					}
				);
			})
			.catch((err) => console.log(err));
	}

	submitForm = (e) => {
		e.preventDefault();
		const postId = this.state.id;
		axios
			.put(`http://localhost:5000/api/notes/${postId}`, {
				title: this.state.posttitle,
				content: this.state.postcontent,
			})
			.then((res) => {
				if (res.status === 200) {
					console.log("Post has been edit on server! Redirecting!");
				}
				this.props.history.push(`/post/${postId}`);
			});
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<div>
				<h1>Edit Post</h1>
				<Form onSubmit={this.submitForm}>
					<FormGroup>
						<Input
							type="text"
							value={this.state.posttitle}
							name="posttitle"
							id="posttitle"
							placeholder="Title of Post"
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Input
							type="textarea"
							value={this.state.postcontent}
							style={{ height: 700 }}
							name="postcontent"
							id="blogtext"
							onChange={this.handleChange}
						/>
					</FormGroup>
					<Button type="submit">Edit Post</Button>
				</Form>
			</div>
		);
	}
}

export default EditPosts;
