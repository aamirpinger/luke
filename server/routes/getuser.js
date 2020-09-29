const knex = require("../config/knex");
const express = require("express");
const router = express.Router();
router.get("/user/:id", (req, res) => {
	knex("user_details")
		.where(function () {
			this.where("id", req.params.id);
		})
		.then((results) => {
			res.json(results);
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
