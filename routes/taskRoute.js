const express = require("express");
const { createTask, getTasks, getTask, deleteTask ,updateTask} = require("../controllers/taskController");
const Task = require("../model/taskModel");
const router = express.Router();



//Create a Task
//we use app.post when we want to send a request to DB
router.post("/api/tasks" , createTask);
//GET/Read Task
router.get("/api/tasks" , getTasks);
//Get Task
router.get("/api/tasks/:id" , getTask);
//Delete Task
router.delete("/api/tasks/:id" , deleteTask);
router.put("/api/tasks/:id" , updateTask);

module.exports = router;