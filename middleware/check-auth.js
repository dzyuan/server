const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        // if (!req.headers.authorization)
        let token="";
        //  return;
        console.log(req.headers);
        if (req.headers.authorization) {
            token = req.headers.authorization.split(" ")[1];
        }
        const decodedToken = jwt.verify(token, "long long ago");
        req.userData = { username: decodedToken.username, userId: decodedToken.userId };
        console.log(req.userData)
        next();
    } catch (error) {
        console.log("未授权!" + error);
        res.status(401).json({
            message: "登录失败!未授权!"
        });
    }
}