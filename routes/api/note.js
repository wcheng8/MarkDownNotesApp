const express = require("express");
const app = express.Router();
const notes = require("../../controllers/note.js");
// Create a new Note

app.post("/", notes.create);

// Retrieve all Notes
app.get("/", notes.findAll);

// Retrieve a single Note with noteId
app.get("/:noteId", notes.findOne);

// Update a Note with noteId
app.put("/:noteId", notes.update);

// Delete a Note with noteId
app.delete("/:noteId", notes.delete);

module.exports = app;
