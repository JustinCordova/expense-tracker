import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./css/ExpenseList.css";


const ExpenseList = ({ expenses }) => {
  return (
    <div className="chart">
      {expenses.length === 0 ? (
        <p> No Expenses!  </p>
      ) : (
        <ul>
          {expenses.map((expenses, index) => (
            <ExpenseItem key={index} expense={expenses} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
