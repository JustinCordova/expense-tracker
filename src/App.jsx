import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [editExpense, setEditExpense] = useState(null);
  
  
  function editExpenseFunc(index, updatedExpense){
    const updatedExpArr = [...expenses];
    // updatedExpArr[index] = updatedExpense;
    updatedExpArr[index] = {...updatedExpArr[index], ...updatedExpense};
    setExpenses(updatedExpArr);
  };

  const addExpenseFunc = (expense) => {
    setExpenses([...expenses, expense]);
  };

  function delExpenseFunc(index) {
    const updatedArr = [...expenses];
    updatedArr.splice(index, 1);
    setExpenses(updatedArr);
    console.log("Deleting expense at index: ", index);
  };

  useEffect(() => {
    const totalAmount = expenses.reduce(
      (sum, expense) => sum + parseFloat(expense.amount),
      0
    );
    setTotal(totalAmount);
  }, [expenses]); // runs based on expenses

  // const handle

  return (
    <>
      <div className="App">
        <header className="header">
          {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
          <h1>Expense Tracker</h1>
          <div className="total-exp-container">
            <h2 className="total-expense">Total Expenses: ${total.toString().replace(/^0+/, '')}</h2>
          </div>
        </header>
        <ExpenseForm addExpense={addExpenseFunc} />
        <ExpenseList
          expenses={expenses}
          deleteExpense={delExpenseFunc}
          editExpense={editExpenseFunc}
        />
      </div>
    </>
  );
}

export default App;