import React, { useState } from "react";

function AddTransactionForm() {
  const initialState = {
    date: "",
    description: "",
    category: "",
    amount: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Failed to add transaction");
          throw new Error("Failed to add transaction");
        }
        alert("Transaction added successfully");
        resetForm();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input
            value={formData.date}
            onChange={handleChange}
            type="date"
            name="date"
          />
          <input
            value={formData.description}
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            value={formData.category}
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            value={formData.amount}
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;