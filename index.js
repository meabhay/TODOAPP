const express = require("express");
const app = express();
const connectDB = require("./config/database.js")
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

//import routes for todo api
const todoRoutes = require("./routes/todos.js");
//mount the todo api routes
app.use("/api/v1", todoRoutes);      //mount means add or append with /api/v1


app.listen(PORT, () => {
    console.log(`Server is running at port number ${PORT}`);
})
  
//connecting to database
connectDB;


//default route
app.get("/", (req, res) => {
    res.send("<h1> This is HOMEPAGE <h1>");
})


//MAPPING OR FLOW
//  route is mapped with controller -> controller is mapped with model 