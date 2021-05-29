import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

function App() {

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
      if (res.status !== 200 && res.status !== 201) {
        console.log('Adding an expense is failed');
      }
      return res.json();
    }).catch(err => console.log(err));
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses /> 
    </div>
  );
}

export default App;
