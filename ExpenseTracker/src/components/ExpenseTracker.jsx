import React, { useState, useEffect, useRef } from "react";
import AddSample from "./AddSample";

export default function ExpenseTracker() {
  // ✅ Initialize from localStorage directly (lazy initialization)
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored
      ? JSON.parse(stored).map((e) => ({ ...e, amount: parseFloat(e.amount) }))
      : [];
  });

  const [totalExpense, setTotalExpense] = useState(() => {
    const stored = localStorage.getItem("expenses");
    if (stored) {
      const parsed = JSON.parse(stored).map((e) => ({
        ...e,
        amount: parseFloat(e.amount),
      }));
      return parsed.reduce((sum, expense) => sum + expense.amount, 0);
    }
    return 0;
  });

  // ✅ Keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const handleDelete = (index) => {
    const expenseToDelete = expenses[index];
    setExpenses(expenses.filter((_, i) => i !== index));
    setTotalExpense((prev) => prev - expenseToDelete.amount);
  };

  const handleAdd = () => {
    const titleValue = titleRef.current.value;
    const amountValue = amountRef.current.value;
    const dateValue = dateRef.current.value;

    if (titleValue && amountValue && dateValue) {
      const newExpense = {
        title: titleValue,
        amount: parseFloat(amountValue),
        date: dateValue,
      };

      setExpenses([...expenses, newExpense]);
      setTotalExpense((prev) => prev + parseFloat(amountValue));

      // Clear inputs
      titleRef.current.value = "";
      amountRef.current.value = "";
      dateRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-700 tracking-wide">
        💰 Expense Tracker
      </h1>

      {/* Summary */}
      <div className="w-full max-w-md mb-8 bg-white shadow-2xl rounded-2xl p-6 text-center border border-blue-100">
        <h2 className="text-xl font-semibold text-gray-700">Total Expenses</h2>
        <p className="text-3xl font-extrabold text-red-500 mt-2 total-expense">
          ₹ {totalExpense}
        </p>
      </div>

      {/* Add Expense Form */}
      <div className="w-full max-w-md mb-8 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Expense Title"
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none expense-title"
            ref={titleRef}
          />
          <input
            type="number"
            placeholder="Amount"
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none expense-amount"
            ref={amountRef}
          />
          <input
            type="date"
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none expense-date"
            ref={dateRef}
          />
          <button
            type="button"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300 add-btn"
            onClick={handleAdd}
          >
            ➕ Add Expense
          </button>
        </form>
      </div>

      {/* Expense List */}
      <div className="w-full max-w-md space-y-4">
        {expenses.map(({ title, amount, date }, index) => (
          <AddSample
            key={index}
            title={title}
            amount={amount}
            date={date}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}
