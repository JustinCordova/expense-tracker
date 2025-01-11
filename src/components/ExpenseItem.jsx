import React from "react";
import "./css/ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <li className="expense-item">
        <p className="title">{expense.title}</p>
        <p className="amount">${expense.amount.toFixed(2)}</p>
        <p>Category: {expense.category}</p>
        <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
      </li>
    </li>
  );
};

export default ExpenseItem;
