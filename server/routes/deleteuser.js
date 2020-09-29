const knex = require("../config/knex");
const express = require("express");
const router = express.Router();
router.delete("/users/:id", (req, res) => {
	knex("user_details")
		.where("id", req.params.id)
		.delete()
		.then(() => {
			res.json({ message: "successfully deleted new user." });
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
