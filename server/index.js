//服务端的入口文件，在package.json中写脚本启动它
console.log('服务端已经启动！')
const express =require("express");

const app=express(); //创建express实例；

app.use(require('cors')());//使用跨域
app.use(express.json())

require('./plugins/db')(app);//数据库，用于给前端返回数据
require('./routes/admin')(app);//服务器路由，用于给前端请求数据

app.listen(3000,()=>{
	console.log("http://localhost:3000");
});//监听端口