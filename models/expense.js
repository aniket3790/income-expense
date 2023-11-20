const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('expense',expenseSchema)