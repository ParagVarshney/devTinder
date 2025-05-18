const express=require('express');
const app=express();
app.use("/test",(req,res)=>{
    res.send('hello server i am parag');
})
app.get("/user",(req,res)=>{
    res.send({firstname:"parag"});
})
app.use("/hello",(req,res)=>{
    res.send('namaste');
})
app.post("/user",(req,res)=>{
    res.send('saving database');
})
app.listen(2222, () => {
    console.log('Server is running on port 2222');

});
