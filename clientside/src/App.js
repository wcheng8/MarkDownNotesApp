import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<AppNavbar />
				<Container className="pt-4">
					<Dashboard />
				</Container>
			</Router>
		</div>
	);
}

export default App;
