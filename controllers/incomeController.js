const Income = require('../models/income')

// get
exports.getIncome = async (req, res) => {
    try {
        const data = await Income.find()
        return res.json({ errors: false, data:data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// post
exports.postIncome = async (req, res) => {
    try {
        const data = await Income.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// put
exports.putIncome = async (req,res)=>{
    try {
        const data = await Income.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteIncome = async (req,res)=>{
    try {
        const data = await Income.findByIdAndDelete(req.params.id,req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}