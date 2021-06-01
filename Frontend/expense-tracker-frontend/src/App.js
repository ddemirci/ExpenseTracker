import {useState, useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

function App() {

  let now = new Date();
  const [expenseList, setExpenseList] = useState([]);
  const [filteredMonth, setFilteredMonth] = useState(now.getMonth());
  const [filteredYear, setFilteredYear] = useState(now.getFullYear());

  const fetchExpenses = () => {
    console.log('FETCH');
    let statusCode;
    let url = `http://localhost:3000/expense?month=${filteredMonth}&year=${filteredYear}`;
    
    fetch(url, {
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
  }

  const addExpenseHandler = expense => {
    console.log('ADD');
    let url = 'http://localhost:3000/expense';
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        console.log('Adding an expense is failed');
      }
      return res.json();
    })
    .then(() => fetchExpenses())
    .catch(err => console.log(err));
  }

  useEffect(() => {
    console.log('WILL BE FETCHED');
    fetchExpenses();
  },[filteredMonth, filteredYear])


  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses 
        expenseList ={expenseList} 
        filteredMonth = {filteredMonth} 
        filteredYear = {filteredYear} 
        monthChangedHandler = {setFilteredMonth}
        yearChangedHandler = {setFilteredYear}
      /> 
    </div>
  );
}

export default App;
