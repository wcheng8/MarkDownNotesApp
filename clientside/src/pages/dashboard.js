import axios from "axios";
import { Row, Col, Button } from "reactstrap";
import Blogcard from "./cards/Blogcard";
import DashBoardPagination from "../components/DashBoardPagination";
import React, { Component } from "react";

export class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentWillMount() {
		this.getPosts();
	}
	getPosts() {
		axios
			.get("http://localhost:5000/api/notes")
			.then((res) => {
				this.setState({
					posts: res.data,
				});
				this.props.history.push("/dashboard");
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<>
				<div className="d-flex justify-content-center">
					<h1 className="pt-5 pb-5">Dashboard</h1>
				</div>
				<Row>
					{this.state.posts.map((post, index) => (
						<Col key={index} className="col-4 pb-5">
							<Blogcard
								id={post._id}
								title={post.title}
								content={post.content}
							/>
						</Col>
					))}
				</Row>
				<DashBoardPagination />
			</>
		);
	}
}

export default Dashboard;
