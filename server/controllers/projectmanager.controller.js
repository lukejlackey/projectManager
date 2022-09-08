const Project = require('../models/projects.model')

module.exports.findAllProjects = (req, res) => {
    Project.find()
        .then(allProjects => res.json({ projects: allProjects }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneProject = (req, res) => {
	Project.findOne({ _id: req.params.id })
		.then(oneProject => res.json({ project: oneProject }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProject = (req, res) => {
    Project.create(req.body)
        .then(newProject => res.json({ project: newProject }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProject = (req, res) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedProject => res.json({ project: updatedProject }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
