import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class Showpost extends Component {
	state = {
		details: "",
	};

	componentWillMount() {
		this.getSinglePost();
	}

	onDelete = () => {
		let postId = this.state.details._id;
		axios
			.delete(`http://localhost:5000/api/notes/${postId}`)
			.then((res) => {
				console.log("Post succesfully deleted");
				this.props.history.push("/dashboard");
			})
			.catch((err) => console.log(err));
	};
	getSinglePost() {
		let postId = this.props.match.params.id;
		console.log(postId);
		axios
			.get(`http://localhost:5000/api/notes/${postId}`)
			.then((res) => {
				this.setState(
					{
						details: res.data,
					},
					() => {
						console.log(this.state);
					}
				);
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<>
				<h1>{this.state.details.title}</h1>
				<p>{this.state.details.content}</p>
				<Link
					className="btn btn-primary"
					to={`/post/edit/${this.state.details._id}`}
				>
					Edit
				</Link>
				<button onClick={this.onDelete} className="btn btn-danger right">
					Delete
				</button>
			</>
		);
	}
}

export default Showpost;
