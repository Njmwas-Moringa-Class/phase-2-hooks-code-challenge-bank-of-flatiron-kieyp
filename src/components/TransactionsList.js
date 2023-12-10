import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions }) => {
  const renderTransactions = () => {
    return transactions.map((item) => (
      <Transaction
        key={item.id}
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
      />
    ));
  };

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <TableHeader title="Date" />
          <TableHeader title="Description" />
          <TableHeader title="Category" />
          <TableHeader title="Amount" />
        </tr>
        {renderTransactions()}
      </tbody>
    </table>
  );
};

const TableHeader = ({ title }) => (
  <th>
    <h3 className="ui center aligned header">{title}</h3>
  </th>
);

export default TransactionsList;