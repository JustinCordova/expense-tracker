import React, { useState } from "react";
import "./css/ExpenseForm.css";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState(""); // Title of the expense
  const [amount, setAmount] = useState(""); // Amount of the expense
  const [category, setCategory] = useState(""); // Category of the expense
  const [date, setDate] = useState(new Date().toLocaleDateString("en-CA")); // Default to today's date

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent submission if any field is empty
    if (!title || !amount || !category || !date) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    // Pass data to parent component and reset fields
    addExpense({ title, amount: parseFloat(amount), category, date });
    setTitle("");
    setAmount("");
    setCategory("");
    setDate(new Date().toLocaleDateString("en-CA")); // Reset date to today
  };

  const handleAmountChange = (e) => {
    let value = e.target.value;
    // Only allow numbers and one decimal point using regex pattern
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value); // Update the amount state only if it matches the pattern
    }
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
          type="text"
          value={amount}
          onChange={handleAmountChange} // Ensure proper format
          placeholder="Enter Amount"
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
