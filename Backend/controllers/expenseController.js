const Expense = require('../models/expense');

/**
 * Adding an expense
 * @returns Added expense.
 */
exports.addExpense = async (req,res,next) => {
    
    const title = req.body.title;
    const amount = req.body.amount;
    const date = req.body.date;

    //Control will be done by middleware
    if(title === undefined || amount === undefined || date === undefined)
        return res.status(500);

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
 * Getting all expenses of specified year and month
 * If any month or date are not given, current month is accepted.
 * @returns Expense list
 */
exports.getExpenses = async (req,res,next) => {
    
    let month = req.body.month;
    let year = req.body.year;
    
    if(month === undefined || year === undefined)
    {
        let now = new Date();
        month = now.getMonth();
        year = now.getFullYear();
    }

    let startDate = new Date(year,month,1);
    let endDate = new Date(year,month+1,1);
    
    return Expense
        .find({date:{ $gte: startDate, $lt: endDate}})
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
