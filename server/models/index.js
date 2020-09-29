const config = require("../config/config.json");

const con = require("knex")({
	client: "mysql",
	connection: {
		user: config.username,
		host: config.hostname,
		password: config.password,
		database: confif.database,
	},
});

module.exports = con;
