const Todo = require("../models/todo.js");

//Fetching data in MongoDB
exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todo,
            message: "Entire Todo data is fetched",
        })
    }catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: err.message,
            message: "Server Error",
        })
    }
}