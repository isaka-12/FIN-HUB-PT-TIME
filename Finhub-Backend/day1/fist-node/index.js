const express = require('express');

const app = express();

app.get("/todos",(req,res)=>{
    // console.log(req)
    // console.log("hello word")
    const users = 
        {
            id:1,
            name:"John Doe",
        }
    
    res.send(users);

})

app.listen(3000);