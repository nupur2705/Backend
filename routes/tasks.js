import express  from "express";
import { newTask } from "../controllers/tasks.js";
const router=express.Router();
router.post("/new",newTask);
export default  router;
