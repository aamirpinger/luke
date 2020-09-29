import React, { useEffect, useState } from "react";
import { ListGroup, Button } from "react-bootstrap";

import axios from "axios";

const BASE_URL = "http://localhost:5023";

const handleDelete = (user_id) => {
	new Promise(async (res, rej) => {
		try {
			const response = await axios.delete(`${BASE_URL}/users/${user_id}`);
			if (response && response.data) res(response.data);
		} catch (error) {
			rej(error);
		}
	});
};

const getAllUsersData = async () =>
	new Promise(async (res, rej) => {
		try {
			const response = await axios.get(`${BASE_URL}/users`);
			if (response && response.data) res(response.data);
		} catch (error) {
			rej(error);
		}
	});

function UserList() {
	const [users, setUsers] = useState([]);

	const getData = async () => {
		try {
			const response = await getAllUsersData();
			setUsers(response);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<h1>User List</h1>
			{users.map((user) => (
				<div key={user.id}>
					<ListGroup defaultActiveKey="#link1">
						<ListGroup.Item>
							{
								<div>
									<b>User ID:</b> {user.id} <br />
									<b>First Name:</b> {user.firstName} <br />
									<b>Last Name</b> {user.LastName} <br />
									<b>Email Address</b> {user.emailAddress}
									<br />
									<Button
										type="submit"
										variant="danger"
										onClick={() => handleDelete(user.id)}
									>
										Delete me
									</Button>
								</div>
							}
						</ListGroup.Item>
					</ListGroup>
				</div>
			))}
		</div>
	);
}

export default UserList;
