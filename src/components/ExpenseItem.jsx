import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <p>{expense.title}: ${expense.amount.toFixed(2)}</p>
      <p>Category: {expense.category}</p>
      <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
    </li>
  );
};

export default ExpenseItem;
