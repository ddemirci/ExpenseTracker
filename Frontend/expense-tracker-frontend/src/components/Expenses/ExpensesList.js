import React from 'react';
import ExpenseItem from './ExpenseItem';
import classes from './ExpensesList.module.css';

const ExpensesList = props => {
    
    if (props.expenses.length === 0) {
        return <h2 className={classes.expenses_list__fallback}>Found no expenses.</h2>
    }

    const expenseItemList = props.expenses.map(expense =>
        <ExpenseItem
            key={expense._id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
        />);

    const totalAmount = props.expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <React.Fragment>
            <ul className={classes.expenses_list}>
                {expenseItemList}
            </ul>
            <div className={classes.expenses_list__total}>Total = {totalAmount.toFixed(2)} TL</div>
        </React.Fragment>
    )
}

export default ExpensesList;