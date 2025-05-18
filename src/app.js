const express=require('express');
const app=express();
app.use("/test",(req,res)=>{
    res.send('hello server i am parag');
})
app.use("/hello",(req,res)=>{
    res.send('namaste');
})
app.listen(2222, () => {
    console.log('Server is running on port 2222');

});
