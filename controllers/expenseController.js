const Expense = require('../models/expense')

// get
exports.getExpense = async (req, res) => {
    try {
        const data = await Expense.find()
        return res.json({ errors: false, data:data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// post
exports.postExpense = async (req, res) => {
    try {
        const data = await Expense.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// put
exports.putExpense = async (req,res)=>{
    try {
        const data = await Expense.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteExpense = async (req,res)=>{
    try {
        const data = await Expense.findByIdAndDelete(req.params.id,req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}