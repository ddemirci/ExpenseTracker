const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

//GET /expense/id => Get a specific expense.
router.get('/:id', expenseController.getExpense);

//GET /expense => Get all expenses.
router.get('/',expenseController.getExpenses);

//POST /expense => Add an expense.
router.post('/', expenseController.addExpense);

module.exports = router;