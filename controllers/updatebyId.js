 const Todo = require("../models/todo.js");

 exports.updateById = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()},
        )
        if(!todo){
            return res.status(404).json({
                success: false,
                message: `Todo not found`,
            })
        }
        res.status(200).json({
          success: true,
          data: todo,
          message: `Todo updated successfully`,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          data: err.message,
          message: `Server Error`,
        });
    }
 }