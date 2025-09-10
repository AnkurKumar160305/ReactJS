import React from "react";

const AddSample = ({ title, date, amount, onDelete }) => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition flex justify-between items-center border border-gray-200">
      <div>
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500 italic">{date}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="font-bold text-lg text-red-500">${amount}</p>
        <button
          className="bg-red-500 text-white px-3 py-1.5 rounded-xl hover:bg-red-600 hover:scale-105 transition"
          onClick={onDelete}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default AddSample;
