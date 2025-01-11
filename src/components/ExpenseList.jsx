import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./css/ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="chart">
      <div className="chart-header">
        <div className="header-item">Title</div>
        <div className="header-item">Amount</div>
        <div className="header-item">Category</div>
        <div className="header-item">Date</div>
      </div>
      {expenses.length === 0 ? (
        <p> No Expenses!  </p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <ExpenseItem key={index} expense={expense} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
