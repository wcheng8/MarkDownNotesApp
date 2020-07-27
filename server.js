const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const cors = require("cors");

// Requiring Routes
const users = require("./routes/api/users");
const notes = require("./routes/api/note");
const convertpdf = require("./routes/api/convertpdf");

app.use(cors());
// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB successfully connected"))
	.catch((err) => {
		console.log("Could not connect to the database. Exiting now... ", err);
		process.exit();
	});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/notes/convertpdf", convertpdf);
app.use("/api/notes", notes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
