const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.Model('Expense', expenseSchema);