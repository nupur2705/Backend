import express from "express";
import userRouter from "./routes/user.js";
import {config}from "dotenv";
import taskRouter from "./routes/tasks.js"
import { User } from "./models/user.js";
import cookieParser from "cookie-parser";
export const app=express();

config({
    path:"./data/config.env",
});
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);


app.get("/",(req,res)=>{
    res.send("<h1>nice working</h1>");
});
app.get("/users/all",async(req,res)=>{
  const users= await User.find({})
   console.log(req.query);
    res.json({
        success:true,
        users,
    });
});


