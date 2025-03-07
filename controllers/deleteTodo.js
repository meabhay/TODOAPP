const Todo = require("../models/todo.js");

//Fetching data in MongoDB
exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todo.findByIdAndDelete({_id: id});

    if(!todo){
        res.status(404).json({
           success: false,
           message: " Todo data is not found",
        });
    }

    res.status(200).json({
      success: true,
      message: " Todo data deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Server Error",
    });
  }
};
