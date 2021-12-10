import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYearState, setFilteredYearState] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYearState(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYearState;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedDate={filteredYearState}
        onFilterChangeHandler={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
