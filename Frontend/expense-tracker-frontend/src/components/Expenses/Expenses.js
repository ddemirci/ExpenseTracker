import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import classes from './Expenses.module.css';

const Expenses = props => {

  const handleFilteredMonth = (value) => {
    props.monthChangedHandler(value)
  };

  const handleFilteredYear = (value) => {
    props.yearChangedHandler(value)
  };

  return (
    <div>
      <Card className={classes.expenses}>
        <ExpenseFilter
          selectedMonth={props.filteredMonth}
          selectedYear={props.filteredYear}
          monthHandler={handleFilteredMonth}
          yearHandler={handleFilteredYear} />
        <ExpensesList expenses={props.expenseList} />
      </Card>
    </div>
  )
}

export default Expenses;