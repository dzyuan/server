const express = require("express");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();
const GongfaLibController = require("../controllers/gongfalibs")



router.post("", checkAuth, GongfaLibController.createGongfaLib);

router.get("/:id", GongfaLibController.getProject);

router.put("/:id", checkAuth, GongfaLibController.updateProject);

router.get("", GongfaLibController.getProjects);

router.delete("/:id", checkAuth, GongfaLibController.deleteProject)

router.post("/comment/:id", GongfaLibController.createComment);


router.post("/submit/:id", checkAuth, GongfaLibController.submitProject);


module.exports = router;