const app = require("../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("Testing user end points", function () {
	it("get users", async (done) => {
		const response = await request.get("/users");
		expect(response.status).toBe(200);
		done();
	});

	it("get user", async (done) => {
		const response = await request.get("/user/1");
		expect(response.status).toBe(200);
		done();
	});

	it("post user", async (done) => {
		const payload = {};
		const response = await request.post("/user").send({
			firstName: "Friedrich",
			lastName: "Nietzsche",
			emailAddress: "Friedrichn@gmail.com",
		});
		expect(response.status).toBe(200);
		expect(response.body.message).toBe("successfully created new user.");
		done();
	});

	it("delete user", async (done) => {
		const response = await request.delete("/users/3");
		expect(response.status).toBe(200);
		expect(response.body.message).toBe("successfully deleted new user.");
		done();
	});
});
