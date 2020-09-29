import React from "react";
import UserList from "./Components/UserList";
import DeleteUser from "./Components/DeleteUser";
import PostUserData from "./Components/addUser";
import GetUser from "./Components/getUser";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">list</Link>
							</li>
							<li>
								<Link to="/postusers">Add user</Link>
							</li>
							<li>
								<Link to="/getusers">Get user</Link>
							</li>
							<li>
								<Link to="/deleteuser">Delete user</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path="/getusers" component={GetUser}></Route>
						<Route path="/postusers" component={PostUserData}></Route>
						<Route path="/deleteuser" component={DeleteUser}></Route>
						<Route path="/" component={UserList}></Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
