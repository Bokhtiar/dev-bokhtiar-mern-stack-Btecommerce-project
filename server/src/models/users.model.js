const {Schema, model } = require('mongoose')

const newSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique : true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        require: true
    }
}, {
    timestamps:true
})

const users = model("users", newSchema)
module.exports = users