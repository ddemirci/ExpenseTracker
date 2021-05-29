import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import classes from './Expenses.module.css';

function Expenses() {
  let now = new Date();
  const [expenseList, setExpenseList] = useState([]);
  const [filteredMonth, setFilteredMonth] = useState(now.getMonth());
  const [filteredYear, setFilteredYear] = useState(now.getFullYear());

  useEffect(() => {
    let statusCode;
    fetch(`http://localhost:3000/expense?month=${filteredMonth}&year=${filteredYear}`, {
      method: 'GET'
    })
      .then(res => {
        statusCode = res.status;
        return res.json();
      })
      .then(resData => {
        if (statusCode === 200)
          setExpenseList(resData.expenses);
        else
          console.log('Error occured');
      })
      .catch(err => console.log(err));
  }, [filteredMonth, filteredYear]);

  return (
    <div>
      <Card className={classes.expenses}>
        <ExpenseFilter
          selectedMonth={filteredMonth}
          selectedYear={filteredYear}
          monthHandler={setFilteredMonth}
          yearHandler={setFilteredYear} />
        <ExpensesList expenses={expenseList} />
      </Card>
    </div>
  )
}

export default Expenses;