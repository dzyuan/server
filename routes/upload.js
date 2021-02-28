const express = require("express");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();
const UploadController = require("../controllers/upload")
const multer = require('multer')
const fs = require('fs')


router.post("/gongfalib", multer({
    dest: 'static/gongfalib'
}).single('file'), (req, res) => {
    console.log(req.file)
    fs.renameSync(req.file.path, `static/gongfalib/${req.file.originalname}`)
    console.log(req.file)
    res.send(req.file)
});

router.get('/', (req, res) => {
    console.log(req.query)
    req.query.url ? res.download(req.query.url) : res.send({
      success: false
    })
  });








module.exports = router;