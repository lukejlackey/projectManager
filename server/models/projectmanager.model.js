const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
	price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Must not be negative"]
    },
	description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters"]
    }
}, {timestamps: true});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;