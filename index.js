const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000
app=express()




app.use(cors())
app.use(express.json())


app.get("/", (req,res)=>{
   res.send("School is running") 
})
app.listen(port, ()=>{
    console.log(`school is running on port, ${port}`)
})