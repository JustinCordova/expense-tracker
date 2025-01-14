import React, { useState } from "react";
import "./css/ExpenseItem.css";

const ExpenseItem = ({ expense, index, deleteExpense, editExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(expense.title);
  const [newAmount, setNewAmount] = useState(expense.amount);
  const [newCategory, setNewCategory] = useState(expense.category);
  const [newDate, setNewDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );

  const handleSaveClick = () => {
    const updatedExpense = {
      title: newTitle,
      amount: newAmount,
      category: newCategory,
      date: newDate,
    };
    editExpense(index, updatedExpense);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setNewTitle(expense.title);
    setNewAmount(expense.amount);
    setNewCategory(expense.category);
    setNewDate(new Date().toLocaleDateString("en-CA"));
    setIsEditing(false);
  };

  return (
    <li className="expense-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="title-input"
          />
          <input
            type="text"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            className="amount-input"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="category-input"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Transport">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="date-input"
          />
          <button className="save-button" onClick={handleSaveClick}>
            &#10003;
          </button>
          <button className="cancel-button" onClick={handleCancelClick}>
            &times;
          </button>
        </>
      ) : (
        <>
          <p className="title">{expense.title}</p>
          <p className="amount">${expense.amount}</p>
          <p className="category">{expense.category}</p>
          <p className="date">{expense.date}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            &#9998;
          </button>
          <button
            className="delete-button"
            onClick={() => deleteExpense(index)}
          >
            &times;
          </button>
        </>
      )}
    </li>
  );
};

export default ExpenseItem;
