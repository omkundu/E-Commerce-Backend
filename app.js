const express=require("express");
const app=express();

const errorMiddlewere=require("../backend/middleware/error")

app.use(express.json())
// Route Imports
const product=require("./routes/productRoute");
app.use("/api/v1",product);
module.exports=app

//Middlewere for error

app.use(errorMiddlewere)

