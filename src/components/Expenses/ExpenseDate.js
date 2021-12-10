import "./ExpenseDate.css";
function ExpenseDate(props) {
  const year = props.date.getFullYear();

  const month = props.date
    .toLocaleString("pt-pt", { month: "long" })
    .toUpperCase();
  const day = props.date
    .toLocaleString("pt-pt", { day: "2-digit" })
    .toUpperCase();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
