import React from "react";
import {useState,useEffect} from "react";

export default function ExpenseTracker() {
    const [totalExpense, setTotalExpense] = useState(0);
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState();
    const [date,setDate]=useState();

    const handleAdd=()=>{
        if(title && amount && date){
            setTotalExpense(totalExpense + parseFloat(amount));
        }
    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">💰 Expense Tracker</h1>

      {/* Summary */}
      <div className="w-full max-w-md mb-6 bg-white shadow-lg rounded-2xl p-4 text-center">
        <h2 className="text-xl font-semibold">Total Expenses</h2>
        <p className="text-2xl font-bold text-red-600 total-expense">{totalExpense}</p>
      </div>

      {/* Add Expense Form */}
      <div className="w-full max-w-md mb-6 bg-white shadow-lg rounded-2xl p-4">
        <form className="grid gap-3">
          <input
            type="text"
            placeholder="Expense Title"
            className="p-2 border rounded-lg expense-title"
            value={title}
          />
          <input
            type="number"
            placeholder="Amount"
            className="p-2 border rounded-lg expense-amount"
            value={amount}
          />
          <input
            type="date"
            className="p-2 border rounded-lg expense-date"
            value={date}
          />
          <button
            type="button"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 add-btn"
            onClick={handleAdd}
          >
            Add Expense
          </button>
        </form>
      </div>

      {/* Expense List */}
      <div className="w-full max-w-md space-y-3">
        <div className="bg-white p-4 rounded-2xl shadow flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Sample Expense</h3>
            <p className="text-sm text-gray-500">2025-09-01</p>
          </div>
          <p className="font-bold text-red-600">$100</p>
        </div>
      </div>
    </div>
  );
}