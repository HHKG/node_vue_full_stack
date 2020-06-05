const mongoose=require("mongoose");


const schema=new mongoose.Schema({
	name:{type:String}
})//返回字段模型

module.exports=mongoose.model('Category',schema);