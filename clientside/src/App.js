import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div className="App">
			<AppNavbar />
			<Container className="pt-4">
				<Dashboard />
			</Container>
		</div>
	);
}

export default App;
