const ProjectController = require("../controllers/projectmanager.controller");

module.exports = app => {
    app.get("/projects/all", ProjectController.findAllProjects);
    app.get("/projects/:id", ProjectController.findOneProject);
    app.put("/projects/update/:id", ProjectController.updateExistingProject);
    app.post("/projects/new", ProjectController.createNewProject);
    app.delete("/projects/delete/:id", ProjectController.deleteProject);
};