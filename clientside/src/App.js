// import React from "react";
// import "./App.css";
// import { Container } from "reactstrap";
// import AppNavbar from "./components/AppNavbar";
// import Dashboard from "./pages/dashboard";
// import Favourites from "./pages/favourite";
// import Post from "./pages/Post";
// import MyNotes from "./pages/Users/MyNotes";
// import Profile from "./pages/Users/Profile";
// import AboutMD from "./pages/Users/AboutMD";
// import Home from "./pages/Home";
// import Signup from "./pages/Login/Signup";

// import { BrowserRouter as Router, Route } from "react-router-dom";

// function App() {
// 	return (
// 		<div className="App">
// 			<Router>
// 				<AppNavbar />
// 				<Route exact path="/" component={Home} />
// 				<Route exact path="/signup" component={Signup} />
// 				<Container className="pt-4">
// 					<Route exact path="/dashboard" component={Dashboard} />
// 					<Route exact path="/favourites" component={Favourites} />
// 					<Route exact path="/post" component={Post} />
// 					<Route exact path="/mynotes" component={MyNotes} />
// 					<Route exact path="/profile" component={Profile} />
// 					<Route exact path="/about" component={AboutMD} />
// 				</Container>
// 			</Router>
// 		</div>
// 	);
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</div>
			</Router>
		</Provider>
    );
  }
}
export default App;
