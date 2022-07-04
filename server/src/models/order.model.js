const {Schema, model, mongoose } = require('mongoose')

const newSchema = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: true
    },
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    payment_number: {
        type: String,
        require: true
    },
    payment_Type: {
        type: String,
        require: true
    },
    order_Status:{
        type:Boolean,
        default: true
    }
},{
    timestamps:true
})

const orders = model('orders', newSchema)
module.exports = orders

