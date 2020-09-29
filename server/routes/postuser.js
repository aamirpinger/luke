const knex = require("../config/knex");
const express = require("express");
const router = express.Router();
router.post("/user", (req, res) => {
	knex("user_details")
		.insert({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			emailAddress: req.body.emailAddress,
		})
		.then(() => {
			res.json({ message: "successfully created new user." });
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
