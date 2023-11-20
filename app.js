const express = require('express')
const mongoose = require('mongoose')
const incomeRoute = require('./Routes/incomeRoute')
const expenseRoute = require('./Routes/expenseRoute')

const cors = require('cors')

require('dotenv/config')

const app = express()
// middleware
app.use(express.json())
app.use(cors())
// default
app.get('/',(req,res)=>{
    res.send('user info')
})
// main

app.use('/api/income',incomeRoute)
app.use('/api/expense',expenseRoute)

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()

app.listen(process.env.PORT || 5000) 