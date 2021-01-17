const express = require("express");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();
const ProjectController = require("../controllers/projects")



router.post("", checkAuth, ProjectController.createProject);

router.get("/:id", ProjectController.getProject);

router.put("/:id", checkAuth, ProjectController.updateProject);

router.get("", ProjectController.getProjects);

router.delete("/:id", checkAuth, ProjectController.deleteProject)

router.post("/comment/:id", ProjectController.createComment);


router.post("/submit/:id", checkAuth, ProjectController.submitProject);


module.exports = router;