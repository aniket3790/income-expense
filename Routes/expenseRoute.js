const {getExpense,postExpense,putExpense,deleteExpense} = require('../controllers/expenseController')

const route = require('express').Router()

route.get('/',getExpense)
route.post('/',postExpense)

route.put('/:id',putExpense)
route.delete('/:id',deleteExpense)

module.exports = route