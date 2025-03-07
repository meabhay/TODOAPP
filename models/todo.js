const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema(
    {
        title: {
           type: String,
           required: true,
           maxLength: 50,
        },
        description: {
           type: String,
           required: true,
           maxLength: 50,
        },
    },
    {timestamps:true}     //will add createdAt and updatedAt by default
);

module.exports = mongoose.model("Todo", todoSchema);