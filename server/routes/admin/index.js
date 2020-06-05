//后端路由
module.exports=app=>{
	const express=require("express");
	const router=express.Router();//子路由
	
	const Category=require("../../models/Category")
	
	router.post('/categories',async(req,res)=>{
		const model=await Category.create(req.body);       //创建数据
		res.send(model)
	})
	app.use('/admin/api',router)
}