const knex = require("../config/knex");
const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
	knex
		.select("*")
		.from("user_details")
		.then((results) => {
			res.json(results);
			res.sendStatus(200);
			// res.end(results);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
