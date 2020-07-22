import "./App.css";
import { Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import BlogPosts from "./pages/dashboard";
import Favourites from "./pages/favourite";
import Post from "./pages/Post";
import MyNotes from "./pages/Users/MyNotes";
import Profile from "./pages/Users/Profile";
import AboutMD from "./pages/Users/AboutMD";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
// import DashBoardPagination from "./components/DashBoardPagination";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
  
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
	  // Logout user
	  store.dispatch(logoutUser());
	  // Redirect to login
	  window.location.href = "./login";
	}
  }

class App extends Component {
  render() {
    return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<AppNavbar />
						<Container className="pt-4">
							<Route exact path="/dashboard" component={BlogPosts} />
							{ <switch>
							<PrivateRoute exact path="/favourites" component={Favourites} />
							<PrivateRoute exact path="/post" component={Post} />
							<PrivateRoute exact path="/mynotes" component={MyNotes} />
							<PrivateRoute exact path="/profile" component={Profile} />
							<PrivateRoute exact path="/about" component={AboutMD} />
							</switch> }
						</Container>
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
