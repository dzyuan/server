const express = require("express");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();
const UploadController = require("../controllers/upload")
const multer = require('multer')
const fs = require('fs')


router.post("/", multer({
    dest: 'upload/gongfalib'
}).single('file'), (req, res) => {
    console.log(req.file)
    fs.renameSync(req.file.path, `upload/gongfalib/${req.file.originalname}`)
    console.log(req.file)
    res.send(req.file)
});

router.get('/', (req, res) => {
    console.log(req.query)
    req.query.url ? res.sendFile(`${__dirname}/upload/gongfalib/${req.query.url}`) : res.send({
      success: false
    })
  });








module.exports = router;