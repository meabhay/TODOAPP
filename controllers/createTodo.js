const Todo = require("../models/todo.js");

//Fetching data in MongoDB
exports.createTodo = async(req, res) => {
    try {
        //extract title and description from request body
        const {title, description} = req.body;      //express.json() middleware is used to parse json from   body of request
        //create a new Todo Obj and insert in DB
        const response = await Todo.create({title, description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
            }
        );
    } catch (error) {
        console.error(error);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                data: 'Internal Server Error',
                message: error.message
            }
        );
    }
}