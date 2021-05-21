import {useState, useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
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
  
  return (
    <div>
      <Expenses expenses={expenseList}/> 
    </div>
  );
}

export default App;
