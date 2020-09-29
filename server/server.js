const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const users = require("./routes/getusers");
const user = require("./routes/getuser");
const postuser = require("./routes/postuser");
const deleteuser = require("./routes/deleteuser");
const PORT = process.env.PORT || 5023;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./build")));

//get all users
app.use(users);
//get user
app.use(user);
//post user
app.use(postuser);
//delete user
app.use(deleteuser);

module.exports = app.listen(PORT, console.log(`App started on ${PORT}!!!`));
