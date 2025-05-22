const express=require('express');
const app=express();
// app.use("/test",(req,res)=>{
//     res.send('hello server i am parag');
// })
// app.get("/user",(req,res)=>{
//     res.send({firstname:"parag"});
// })
// app.use("/hello",(req,res)=>{
//     res.send('namaste');
// })
// app.post("/user",(req,res)=>{
//     res.send('saving database');
// })
// const{adminAuth}=require("./Middlewares/auth");
// app.use("/admin",adminAuth)
// app.get("/admin/getAllData",(req,res,next)=>{
//     res.send("all data sent");
// })
const{connectDB}=require("./config/database");
const User=require("./models/user");
app.use(express.json());
app.post("/signUp",async(req,res)=>{
    // const user=new User({
    //     firstName:"chirag",
    //     lastName:"varshney",
    //     emailId:"varshneychirag6676@gmail.com",
    //     password:"Parag@123"
    // });
    const user=new User(req.body);
    try{
        await user.save();
        res.send("user added successfully");
    }catch(err){
        res.status(401).send("error saving the user"+err.message);
    }
})
app.get("/user",async(req,res)=>{
    const EmailId=req.body.emailId;
    const user=await User.find({emailId:EmailId});
    try{
        res.send(user);
    }catch(err){
        res.status(401).send("something went wrong");
    }
})
// for get all the users do User.find({})  empty object in the above same manner
app.delete("/user",async(req,res)=>{
    const userId=req.body.userId;
    try{
        const user=await User.findByIdAndDelete(userId);
        res.send("deleted successfully")
    }catch(err){
        res.status(401).send("something went wrong");
    }
})
app.patch("/user",async(req,res)=>{
    const userId=req.body.userId;
    const data=req.body;
    
    try{
        const allowedUpdates = ["userId","about", "gender", "age"];
        const isUpdateAllowed = Object.keys(data).every(k => allowedUpdates.includes(k));

        if (!isUpdateAllowed) {
            throw new Error("Update not allowed");
        }
        const user=await User.findByIdAndUpdate({_id:userId},data);
        res.send("updated successfully")
    }catch(err){
        res.status(401).send("update failed"+err.message);
    }
})
connectDB().then(()=>{
    console.log("database connection established");
    app.listen(2222, () => {
        console.log('Server is running on port 2222');
    }); 
}).catch(()=>{
    console.log(" database not connected");
})


