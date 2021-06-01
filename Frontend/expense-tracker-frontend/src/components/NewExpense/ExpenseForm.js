import React, {useState} from 'react';
import classes from './ExpenseForm.module.css';

const todayDateString = () => {
    return new Date().toISOString().substring(0,10);
}

const ExpenseForm = (props) => {
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState(todayDateString);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // To prevent reload of the page
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };
        props.onSaveExpenseData(expenseData);
        //Clear the form
        setTitle('');
        setAmount('');
        setDate(todayDateString);
    }

    return (
    <form onSubmit={submitHandler}>
        <div className= {classes.new_expense__controls}>
            <div className= {classes.new_expense__control}>
                <label>Title</label>
                <input value={title} type='text' onChange={titleChangeHandler}/>
            </div>
            <div className={classes.new_expense__control}>
                <label>Amount</label>
                <input value={amount} type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className={classes.new_expense__control}>
                <label>Date</label>
                <input value= {date} type='date' min="2019-01-01" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className={classes.new_expense__actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
}

export default ExpenseForm;