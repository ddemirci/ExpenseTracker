const Expense = require('../models/expense');

/**
 * Adding an expense
 * @returns Added expense.
 */
exports.addExpense = async (req,res,next) => {
    
    const title = req.body.title;
    const amount = req.body.amount;
    const date = req.body.date;
    
    const expense = new Expense({
        title: title,
        amount: amount,
        date: date
    });
    
    try
    {
        await expense.save();
        return res.status(201).json({expense: expense});

    } catch(err){
        return res.status(500).json({err});
    }
}

/**
 * Getting all expenses
 * @returns Expense list
 */
exports.getExpenses = async (req,res,next) => {
    return Expense.find()
        .then(expenses => res.status(200).json({expenses}))
        .catch(err => res.status(500).json({err}));
}

/**
 * Getting an expense
 * @returns Expense
 */
 exports.getExpense = async (req,res,next) => {
    const expenseId = req.params.id;
    Expense.findById(expenseId)
        .then(product => res.status(200).json({product}))
        .catch(err => res.status(500).json({err}));
}