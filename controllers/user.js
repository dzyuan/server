const User = require('../models/user');
const jwt = require("jsonwebtoken");



exports.userLogin = (req, res, next) => {
 
  let fetchedUser;
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "登录失败,用户不存在!"
        });
      }
      fetchedUser = user;
      return req.body.password === user.password;
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "登录失败,密码错误!"
        });
      }
      const token = jwt.sign(
        { username: fetchedUser.username, userId: fetchedUser._id },
        "long long ago",
        { expiresIn: "168h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 604800,
        userId: fetchedUser._id,
        username: fetchedUser.username,
        userType: fetchedUser.userType,
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        message: "登录失败,用户名或密码错误!"
      });
    });
}


exports.createUser = (req, res, next) => {
  console.log('req='+JSON.stringify(req))
      const user = new User({
        username: req.body.username,
        userType: req.body.userType,
        password: req.body.password
      });
      user.save()
        .then(result => {          
          res.status(201).json({
            message: '用户创建成功!',
            result: result
            
          });
          console.log('username'+req.body.username)
        }).catch(err => {
          console.log(err)
          res.status(500).json({
            message: "注册出错,可能是用户名重复!"
          });
        });

    
}