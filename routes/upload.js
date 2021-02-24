const express = require("express");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();
const UploadController = require("../controllers/upload")



router.post("/", UploadController.upload);

router.get("/",(req,res)=>{
    res.send('uploadok')
});







module.exports = router;