import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import classes from './ExpenseItem.module.css';
import UpdateExpense from '../UpdateExpense/UpdateExpense';
import { useState } from 'react';

function ExpenseItem(props) {
    
    const [isEdit, setIsEdit] = useState(false);

    const toggleUpdateHandler = toggle => {
        setIsEdit(toggle);
    }

    const updateExpenseHandler = expense => {
        const expenseId = expense.id;
        let url = `http://localhost:3000/expense/${expenseId}`;
        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(expense)
        })
        .then(res => {
            if (res.status !== 200 && res.status !== 204) {
                console.log('Updating an expense is failed');
            }
            return res.json();
        })
        .then(() => 
        {
            alert("Successfully updated!", {showConfirmButton:false});
            window.location.reload();
            return setIsEdit(false);
        })
        .catch(err => console.log(err));
    }
    
    return (
        <li>
            <Card className={classes.expense_item} >
                <ExpenseDate date={props.date} />
                <div className= {classes.expense_item__description} onClick={() => toggleUpdateHandler(true)}>
                    <h2>{props.title}</h2>
                    <div className={classes.expense_item__price}>{props.amount} TL</div>
                </div>
            </Card>
            {isEdit && <UpdateExpense expenseItem={props} updateExpenseHandler={updateExpenseHandler} onClose={() => toggleUpdateHandler(false)}/>}
        </li>
    );
}

export default ExpenseItem;