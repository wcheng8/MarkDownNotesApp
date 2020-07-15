const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

// @route   GET api/items
// @desc    GET All Items
// @access  Public
router.get("/", (req, res) => {
	User.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post("/", (req, res) => {
	const newUser = new User({
		name: req.body.name,
		// userName: req.body.userName,
		// email: req.body.email,
		// password: req.body.password,
	});
	newUser
		.save()
		.then((user) => res.json(user))
		.catch((err) => res.status(404).json(err));
});

// @route   DELETE api/items/:id
// @desc    DELETE an Items
// @access  Public
router.delete("/:id", (req, res) => {
	User.findById(req.params.id)
		.then((items) => items.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
