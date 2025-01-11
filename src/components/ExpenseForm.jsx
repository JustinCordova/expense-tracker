import React, { useState } from "react";
import "./css/ExpenseForm.css";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  // const [date, setDate] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    addExpense({ title, amount: parseFloat(amount), category, date });
    setTitle("");
    setAmount("");
    setCategory("");
    // setDate("");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="titleLabel">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Expense Title"
        />
      </div>
      <div className="amountLabel">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          min="0"
        />
      </div>
      <div className="categoryLabel">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Transport">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <div className="dateLabel">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="submitLabel">
        <button type="submit"> Add </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
