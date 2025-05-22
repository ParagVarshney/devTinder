const mongoose=require("mongoose");
const connectDB= async()=>{
    await mongoose.connect("mongodb+srv://varshneychirag321:Parag123@devtinder-cluster.nxkdlqf.mongodb.net/?retryWrites=true&w=majority&appName=devTinder-cluster")
}
module.exports={connectDB};
