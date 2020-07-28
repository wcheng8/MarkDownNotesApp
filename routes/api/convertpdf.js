const express = require("express");
const app = express.Router();
const Note = require("../../models/Note");
const fs = require("fs");
const AWS = require("aws-sdk");
const path = require("path");
const markdownpdf = require("markdown-pdf");

const AWSkey = require("../../config/keys").AWSkey;
const AWSid = require("../../config/keys").AWSid;
//configuring the AWS environment
AWS.config.update({
	accessKeyId: AWSid,
	secretAccessKey: AWSkey,
});
var s3 = new AWS.S3();

const note = app.get("/:noteId", async (req, res) => {
	return await Note.findById(req.params.noteId).then((note) => {
		if (!note) {
			return res.status(404).send({
				message: "Note not found with id " + req.params.noteId,
			});
		}
		console.log(note);
		res.send(note);

		fs.writeFile("note.md", note.content, (err) => {
			// throws an error, you could also catch it here
			if (err) throw err;

			// success case, the file was saved
			console.log("Note saved!");
		});

		const pdf = fs
			.createReadStream("./note.md")
			.pipe(markdownpdf())
			.pipe(fs.createWriteStream("./note.pdf"));

		if (pdf) {
			console.log("note converted to pdf!");
			uploadFile("../../note.pdf");
		}

		return note;
	});
});

// Uploading file to AWS
const uploadFile = (fileName) => {
	const filePath = fileName;

	//  AWS params
	var params = {
		Bucket: "mdstorageexample",
		Body: fs.createReadStream(filePath),
		Key: "folder/" + Date.now() + "_" + path.basename(filePath),
		ACL: "public-read",
	};
	// Upload to AWS
	let pdflink = s3.upload(params, function (err, data) {
		//handle error
		if (err) {
			console.log("Error", err);
		}

		//success
		if (data) {
			console.log("Uploaded in:", data.Location);
			pathfile.push(data.location);
			return data.location;
		}
	});
	return pdflink;
};
console.log("note sent!");

module.exports = app;
