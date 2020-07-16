import React from "react";
import "./App.css";
import { Container, Button } from "reactstrap";
import AppNavbar from "./components/AppNavbar";

function App() {
	return (
		<div className="App">
			<AppNavbar />
			<Container className="pt-4">
				<Button color="danger">Danger!</Button>
			</Container>
		</div>
	);
}

export default App;
