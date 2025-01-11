import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";


const ExpenseList = ({ expenses }) => {
  return (
    <div className="Chart">
      {expenses.length === 0 ? (
        <p>  </p>
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
