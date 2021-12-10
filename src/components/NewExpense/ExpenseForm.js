import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const handleChangeTitle = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const handleChangeAmount = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const handleChangeDate = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleCancelForm = () => {
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    setShowForm(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onAddExpenseData(expensesData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {showForm && (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Título</label>
              <input
                type="text"
                onChange={handleChangeTitle}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Quantia €</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={handleChangeAmount}
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Data</label>
              <input
                type="date"
                min="2020-01-01"
                max="2022-12-31"
                onChange={handleChangeDate}
                value={enteredDate}
              />
            </div>
          </div>

          <div className="new-expense__actions">
            <button type="submit">Adicionar Despesa</button>{" "}
            <button onClick={handleCancelForm}>Cancelar</button>
          </div>
        </>
      )}
      {!showForm && (
        <div>
          <button onClick={handleShowForm}>Adicionar Nova Despesa</button>{" "}
        </div>
      )}
    </form>
  );
}

export default ExpenseForm;
