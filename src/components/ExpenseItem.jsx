import React from "react";
import "./css/ExpenseItem.css";

const ExpenseItem = ({ expense, index, deleteExpense, editExpense}) => {
  
  return (
    <li>
      <li className="expense-item">
        <p className="title">{expense.title}</p>
        <p className="amount">${expense.amount.toFixed(2)}</p>
        <p className="category">{expense.category}</p>
        <p className="date">{new Date(expense.date).toLocaleDateString()}</p>
        {/* HTML CHARACTER ENTITIES */}
        <button className="edit-button" onClick={() => editExpense(index)}>&#9998;</button> 
        <button className="delete-button" onClick={() => deleteExpense(index)}>&times;</button>
      
      </li>
    </li>
  );
};

export default ExpenseItem;
