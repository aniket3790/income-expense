const {getIncome,postIncome,putIncome,deleteIncome} = require('../controllers/incomeController')

const route = require('express').Router()

route.get('/',getIncome)
route.post('/',postIncome)

route.put('/:id',putIncome)
route.delete('/:id',deleteIncome)

module.exports = route