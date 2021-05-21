import React from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import classes from './Expenses.module.css';

function Expenses(props) {
    return (
        <div>
            <Card className={classes.expenses}>
                <ExpensesList expenses={props.expenses} />
            </Card>
        </div>
    )
}

export default Expenses;