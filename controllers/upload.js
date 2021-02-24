const multer = require('multer')
const fs = require('fs')

exports.upload = (req, res, next) => {
  
  console.log(req)
  
  multer({
  dest: 'upload'
}).array('file', 10), (req, res) => {
  const files = req.file
  const fileList = {}
  for (var i in files) {
    var file = files[i]
    fs.renameSync(file.path, `upload/${file.originalname}`)
    file.path = `upload/${file.originalname}`
    fileList.push(file)
  }
  console.log(fileList)
  res.send(fileList)
}
 
 
}

