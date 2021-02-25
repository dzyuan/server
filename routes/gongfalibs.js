const express = require("express");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();
const GongfalibController = require("../controllers/gongfalibs")



router.post("", checkAuth, GongfalibController.createGongfalib);

router.get("/:id", GongfalibController.getGongfalib);

router.put("/:id", checkAuth, GongfalibController.updateGongfalib);

router.get("", GongfalibController.getGongfalibs);

router.delete("/:id", checkAuth, GongfalibController.deleteGongfalib)




module.exports = router;