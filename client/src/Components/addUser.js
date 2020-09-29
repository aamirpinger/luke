import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

const BASE_URL = "http://localhost:5023";

function PostUserData() {
	const _handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${BASE_URL}/user`, { firstName, lastName, emailAddress })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const [firstName, setFirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	return (
		<div>
			<Form onSubmit={_handleSubmit}>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Add User</Form.Label>
					<Form.Control
						type="text"
						name="firstName"
						placeholder="firstName"
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<Form.Control
						type="text"
						name="lastName"
						placeholder="lastName"
						onChange={(e) => setlastName(e.target.value)}
					/>
					<Form.Control
						type="text"
						name="emailAddress"
						placeholder="emailAddress"
						onChange={(e) => setEmailAddress(e.target.value)}
					/>
				</Form.Group>
				<Button className="order-button" type="submit" variant="success">
					Submit
				</Button>
			</Form>
		</div>
	);
}
export default PostUserData;
