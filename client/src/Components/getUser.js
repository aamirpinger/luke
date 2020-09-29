import React, { useEffect, useState } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";

import axios from "axios";

const BASE_URL = "http://localhost:5023";

function AddUser() {
	const _handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get(`${BASE_URL}/user/${search}`)
			.then((response) => {
				console.log(response);
				userData(response.data[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const [search, searchUsers] = useState("");
	const [user, userData] = useState([]);

	return (
		<div>
			<div>
				<Form onSubmit={_handleSubmit}>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label>Search By ID: </Form.Label>
						<Form.Control
							type="text"
							name="id"
							placeholder="ID"
							onChange={(e) => searchUsers(e.target.value)}
						/>
					</Form.Group>
					<Button className="order-button" type="submit" variant="success">
						Submit
					</Button>
				</Form>
			</div>
			<div>
				<h1>User</h1>
				<ListGroup defaultActiveKey="#link1">
					{user ? (
						<ListGroup.Item>
							{
								<p>
									<b>User ID:</b> {user.id} <br />
									<b>First Name:</b> {user.firstName} <br />
									<b>Last Name</b> {user.LastName} <br />
									<b>Email Address</b> {user.emailAddress}
									<br />
								</p>
							}
						</ListGroup.Item>
					) : (
						<p>User not available</p>
					)}
				</ListGroup>
			</div>
		</div>
	);
}

export default AddUser;
