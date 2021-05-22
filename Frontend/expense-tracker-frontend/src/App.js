import {useState, useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

function App() {
  const [expenseList, setExpenseList] = useState([]);
  
  useEffect(() => {
    let statusCode;
    fetch('http://localhost:3000/expense')
    .then(res => {
      statusCode = res.status;
      return res.json();
    })
    .then(resData => {
      if(statusCode === 200)
        setExpenseList(resData.expenses);
      else
        console.log('Error occured');
    })
    .catch(err => console.log(err));
  },[]);
  

  const addExpenseHandler = expense => {
    let url = 'http://localhost:3000/expense';
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
    .then(res => {
      console.log(res);
      if (res.status !== 200 && res.status !== 201) {
        console.log('Adding an expense is failed');
      }
      return res.json();
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses={expenseList}/> 
    </div>
  );
}

export default App;
