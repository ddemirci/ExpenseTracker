import { useState } from 'react';
import Modal from '../UI/Modal';
import classes from './UpdateExpense.module.css'

const UpdateExpense = props => {

    // const todayDateString = () => {
    //     return new Date().toISOString().substring(0,10);
    // }
    const expenseItem = props.expenseItem;
    const [title,setTitle] = useState(expenseItem.title);
    const [amount,setAmount]= useState(expenseItem.amount);
    const [date,setDate] = useState(expenseItem.date.substring(0,10));

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
        props.updateExpenseHandler({
            id: expenseItem.id,
            title: title,
            amount: +amount,
            date: new Date(date)
        });
    }


    return <Modal onClose={props.onClose}>
        <form onSubmit={submitHandler}>
            <div className= {classes.update_expense__controls}>
                <div className= {classes.update_expense__control}>
                    <label>Title</label>
                    <input value={title} type='text' onChange={titleChangeHandler}/>
                </div>
                <div className={classes.update_expense__control}>
                    <label>Amount</label>
                    <input value={amount} type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className={classes.update_expense__control}>
                    <label>Date</label>
                    <input value= {date} type='date' min="2019-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={classes.update_expense__actions}>
                <button type="submit">Update Expense</button>
            </div>
        </form>
    </Modal>
}

export default UpdateExpense;