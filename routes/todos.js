const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo.js");
const {getTodo} = require("../controllers/getTodo.js");
const { getById } = require("../controllers/getTodoById.js");
const { updateById } = require("../controllers/updatebyId.js");
const { deleteById } = require("../controllers/deleteTodo.js");


//define API routes
router.post("/createTodo", createTodo);      //SYNTAX-: router.METHOD("PATH", HANDLER(CONTROLLER))
router.get("/getTodo",getTodo);
router.get("/getById/:id", getById);
router.put("/updateById/:id", updateById);
router.delete("/deleteTodo/:id", deleteById);

module.exports = router; 