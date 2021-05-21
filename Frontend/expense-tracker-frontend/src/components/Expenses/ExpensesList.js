import ExpenseItem from './ExpenseItem';
import classes from './ExpensesList.module.css';

const ExpensesList = props => {
    if (props.expenses.length === 0) {
        return <h2 className={classes.expenses_list__fallback}>Found no expenses.</h2>
    }

    return (
        <ul className={classes.expenses_list}>
            {
                props.expenses.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                    />)
            }
        </ul>
    )
}

export default ExpensesList;