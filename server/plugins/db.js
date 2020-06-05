module.exports=app=>{
	const mongoose=require("mongoose");//引入mongoose
	mongoose.connect("mongodb+srv://todoapp:wangyiyang520@cluster0-z2ixs.mongodb.net/test",{
		useNewUrlParser:true
	})
}