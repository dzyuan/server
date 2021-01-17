var express =require('express');
var app = express();
app.use(express.static('static'))

app.get('/',function(req,res){
    res.set('Content-Type', 'text/html')
    res.send('express服务已经启动！')
});
app.listen(5678,function(){
    console.log('5678已经启动')
})