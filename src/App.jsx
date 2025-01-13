import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpenseFunc = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const editExpenseFunc = (index) => {
    // const  expenseToEdit = expenses[index];
    // const h1Element = document.createElement("h1");
    // h1Element.textContent = "Hello, World!";
    // document.title.appendChild(h1Element);
  }

  function delExpenseFunc(index) {
    const updatedArr = [...expenses];
    updatedArr.splice(index, 1);
    setExpenses(updatedArr);
    // change total
    totalExpenseFunc();
    console.log("Deleting expense at index: ", index);
  }
  

  useEffect(() => {
    const totalAmount = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
    setTotal(totalAmount);
  }, [expenses]); // runs based on expenses

  

  return (
    <>
      <div className="App">
        <header className="header">
          {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
          <h1>Expense Tracker</h1>
          <h2 className="total-expense">Total: {total.toFixed(2)}</h2>
        </header>
        <ExpenseForm addExpense={addExpenseFunc} />
        <ExpenseList expenses={expenses} deleteExpense={delExpenseFunc} editExpense = {editExpenseFunc} />
      </div>
    </>
  );
}

export default App;
