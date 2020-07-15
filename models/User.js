const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		// unique: true,
		required: true,
	},
	// userName: {
	// 	type: String,
	// 	// unique: true,
	// 	// required: true,
	// },
	// email: {
	// 	type: String,
	// 	// required: true,
	// 	// unique: true,
	// },
	// password: {
	// 	type: String,
	// 	// required: true,
	// },
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = User = mongoose.model("user", userSchema);
