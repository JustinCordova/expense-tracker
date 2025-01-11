import { useState } from "react";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseFunc = (expense) => {
    setExpenses([...expenses, expense])
  };
  
  return (
    <>
      <div className="App">
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpenseFunc} />
        <ExpenseList expenses={expenses} />
      </div>

      
    </>
  );
}

export default App;