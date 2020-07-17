import React from "react";
import Login from "./Login/Login";

const Home = () => {
	return (
		<div>
			<h1>
				This is the Homepage! It will show the login page if the user hasn't
				logged in/signup page saying try MDBlog and a bit about it. It will jump
				to the user dashboard for user owned posts and file state if the user is
				signed in.
				<Login />
			</h1>
		</div>
	);
};

export default Home;
