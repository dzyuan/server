const Gongfalib = require('../models/gongfalib');


exports.createGongfalib = (req, res, next) => {
  const gongfalib = new Gongfalib({
    year: req.body.year,
    name: req.body.name,
    department: req.body.department,
    writer: req.body.writer, 
    techField: req.body.techField, 
    attachment:req.body.attachment,
    class: req.body.class,
    summary: req.body.summary,
    createOn: new Date(),
    creator: req.userData.userId,
  })
console.log (gongfalib)
  gongfalib.save()
  .then(  
  res.status(201).json({
    message: '工法添加成功!'
  })).catch(err => {
    res.status(500).json({
      message: "工法添加失败!"
    });
  });
}

exports.getGongfalib = (req, res, next) => {
  Gongfalib.findById(req.params.id).then(gongfalib=> {
    if (gongfalib) {
      res.status(200).json(gongfalib);
    } else {
      res.status(404).json({
        message: "工法信息不存在!"
      });
    }
  }).catch(err => {
    res.status(500).json({
      message: "工法获取失败!"
    });
  });
}


exports.getGongfalibs = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const gongfalibQuery = Gongfalib.find();
  let fetchedGongfalibs;
  if (pageSize && currentPage) {
    gongfalibQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  gongfalibQuery.then(documents => {
    fetchedGongfalibs = documents;
    return Gongfalib.countDocuments();
  }).then(count => {
    res.status(200).json({
      message: '成功发送!',
      gongfalibs: fetchedGongfalibs,
      gongfalibCount: count
    });
  }).catch(err => {
    res.status(500).json({
      message: "工法获取失败!"
    });
  });
}



exports.updateGongfalib = (req, res, next) => {
  const gongfalib = new Gongfalib({
    _id: req.body._id,
    year: req.body.year,
    name: req.body.name,
    department: req.body.department,
    writer: req.body.writer,  
    techField: req.body.techField, 
    attachment:req.body.attachment,
    class: req.body.class,
    summary: req.body.summary, 
    modifyOn: new Date(),
    
  })
  Gongfalib.updateOne({
    _id: req.params.id,
    creator: req.userData.userId
  }, gongfalib).then(result => {
    console.log(result);
    if (result.n > 0) {
      res.status(200).json({
        message: "工法更新成功!"
      })
    } else {
      res.status(401).json({
        message: "工法更新失败!"
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: "工法更新失败!"
    });
  });
}


exports.deleteGongfalib = (req, res, next) => {
  Gongfalib.deleteOne({
      _id: req.params.id,
      creator: req.userData.userId
    })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({
          message: "工法删除成功!"
        })
      } else {
        res.status(401).json({
          message: "工法删除失败!"
        })
      }

    })
    .catch(err => {
      res.status(500).json({
        message: "工法删除失败!"
      });
    })
}



