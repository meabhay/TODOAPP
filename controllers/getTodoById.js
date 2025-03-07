const Todo = require("../models/todo.js");

exports.getById = async (req, res) => {
    try {
        
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        if(!todo){
            return res.status(404).json({
                success: false,
                message: `No data found with given ID`,
            })
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: `Following data is found with id no. ${id}`,
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: err.message,
            message: `Server Error`,
        })
    }
}