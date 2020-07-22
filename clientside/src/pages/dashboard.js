import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
import Blogcard from "./cards/Blogcard";
import DashBoardPagination from "../components/DashBoardPagination";

const Dashboard = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const allPosts = axios
			.get("http://localhost:5000/api/notes")
			.then((res) => {
				setPosts(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div className="d-flex justify-content-center">
				<h1 className="pt-5 pb-5">Dashboard</h1>
			</div>
			<Row>
				{posts.map((post) => (
					<Col className="col-4 pb-5">
						<Blogcard title={post.title} content={post.content} />
						{post.title}
					</Col>
				))}
			</Row>
			<DashBoardPagination />
		</>
	);
};

export default Dashboard;
