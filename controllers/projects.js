const Project = require('../models/project');

exports.createProject = (req, res, next) => {
  const project = new Project({
    year: req.body.year,
    name: req.body.name,
    department: req.body.department,
    leader: req.body.leader,
    startDate: req.body.startDate,
    completeDate: req.body.completeDate,
    budget: req.body.budget,
    techField: req.body.techField,
    techSource: req.body.techSource,
    purpose: req.body.purpose,
    implementation: req.body.implementation,
    technology: req.body.technology,
    innovation: req.body.innovation,
    createOn: new Date(),
    creator: req.userData.userId,

  })
  project.save();
  console.log(project);
  res.status(201).json({
    message: '项目添加成功!'
  }).catch(err => {
    res.status(500).json({
      message: "项目添加失败!"
    });
  });
}

exports.getProject = (req, res, next) => {
  Project.findById(req.params.id).then(project => {
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({
        message: "项目信息不存在!"
      });
    }
  }).catch(err => {
    res.status(500).json({
      message: "项目获取失败!"
    });
  });
}


exports.getProjects = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const projectQuery = Project.find();
  let fetchedProjects;
  if (pageSize && currentPage) {
    projectQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  projectQuery.then(documents => {
    fetchedProjects = documents;
    return Project.countDocuments();
  }).then(count => {
    res.status(200).json({
      message: '成功发送!',
      projects: fetchedProjects,
      projectCount: count
    });
  }).catch(err => {
    res.status(500).json({
      message: "项目获取失败!"
    });
  });
}



exports.updateProject = (req, res, next) => {
  const project = new Project({
    _id: req.body._id,
    name: req.body.name,
    department: req.body.department,
    leader: req.body.leader,
    startDate: req.body.startDate,
    completeDate: req.body.completeDate,
    budget: req.body.budget,
    techField: req.body.techField,
    techSource: req.body.techSource,
    purpose: req.body.purpose,
    implementation: req.body.implementation,
    technology: req.body.technology,
    innovation: req.body.innovation,   
    modifyOn: new Date()
  })
  Project.updateOne({
    _id: req.params.id,
    creator: req.userData.userId
  }, project).then(result => {
    console.log(result);
    if (result.n > 0) {
      res.status(200).json({
        message: "更新成功!"
      })
    } else {
      res.status(401).json({
        message: "更新失败!"
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: "项目更新失败!"
    });
  });
}


exports.deleteProject = (req, res, next) => {
  Project.deleteOne({
      _id: req.params.id,
      creator: req.userData.userId
    })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({
          message: "删除成功!"
        })
      } else {
        res.status(401).json({
          message: "删除失败!"
        })
      }

    })
    .catch(err => {
      res.status(500).json({
        message: "项目删除失败!"
      });
    })
}



exports.createComment = (req, res, next) => {
  const id = req.params.id;
  Project.update({
    _id : id
  }, {
   '$push': {
      comments:{
      username: req.body.username,
      commentContent: req.body.comment,
      createOn: new Date()}
    }
  },function(err, data) {
    if (err) {
      console.log("pusherr"+err);
    } else {
      console.log(data);
    }
  })

  res.status(201).json({
    message: '评审意见添加成功!'
  }).catch(err => {
    res.status(500).json({
      message: "评审意见添加失败!"
    });
  });
}

exports.submitProject = (req, res, next) => {
  
  const id = req.params.id;
  console.log(req.body)
  Project.updateOne({
    _id : id
  }, {
   //status:req.body.status
   status:req.body.status
    },function(err, data) {
    if (err) {
      console.log("submiterr"+err);
    } else {
      console.log(data);
    }
  })

  res.status(201).json({
    message: '项目提交成功!'
  }).catch(err => {
    res.status(500).json({
      message: "项目提交失败!"
    });
  });
}

