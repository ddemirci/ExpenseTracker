import {useState} from 'react';
import classes from './NewExpense.module.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseDataHandler = (expenseData) => {
        props.onAddExpense(expenseData);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className={classes.new_expense}>
            {!isEditing && <button onClick={() => setIsEditing(true)}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
}

export default NewExpense;
