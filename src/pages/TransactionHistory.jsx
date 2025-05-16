import React from 'react';

const transactions = [
  {
    id: 1,
    title: 'Spotify',
    amount: '- £15.00',
    status: 'Processing',
    date: 'Wed 1:00pm',
    category: 'Subscriptions',
    type: 'expense',
  },
  {
    id: 2,
    title: 'Salary',
    amount: '+ £10,000.00',
    status: 'Success',
    date: 'Mon 9:00am',
    category: 'Income',
    type: 'income',
  },
  {
    id: 3,
    title: 'Amazon',
    amount: '- £120.00',
    status: 'Success',
    date: 'Tue 3:30pm',
    category: 'Groceries',
    type: 'expense',
  },
  {
    id: 4,
    title: 'Freelance',
    amount: '+ £5,000.00',
    status: 'Success',
    date: 'Thu 10:00am',
    category: 'Deposit',
    type: 'income',
  },
  {
    id: 5,
    title: 'Netflix',
    amount: '- £13.99',
    status: 'Processing',
    date: 'Fri 11:00pm',
    category: 'Subscriptions',
    type: 'expense',
  },
  {
    id: 6,
    title: 'Apple Store',
    amount: '- £299.99',
    status: 'Failed',
    date: 'Sat 2:00pm',
    category: 'Tech',
    type: 'expense',
  },
  {
    id: 7,
    title: 'Upwork Payout',
    amount: '+ £2,150.00',
    status: 'Success',
    date: 'Sun 5:00pm',
    category: 'Freelance',
    type: 'income',
  },
];

const statusStyles = {
  Processing: 'bg-gray-200 text-gray-700',
  Success: 'bg-green-100 text-green-700',
  Declined: 'bg-red-100 text-red-700',
};

const categoryStyles = {
  Subscriptions: 'bg-blue-100 text-blue-600',
  Deposit: 'bg-green-100 text-green-600',
  Groceries: 'bg-purple-100 text-purple-600',
  Income: 'bg-indigo-100 text-indigo-600',
  'Food and dining': 'bg-pink-100 text-pink-600',
};

const TransactionHistory = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Transaction history</h2>
          <p className="text-sm text-gray-500">Gain Insights and Track Your Transactions Over Time</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <button className="border px-4 py-2 rounded-md text-gray-700 text-sm shadow-sm">Select Account</button>
          <button className="border px-4 py-2 rounded-md text-gray-700 text-sm shadow-sm">Apply filter</button>
        </div>
      </div>

      {/* Bank Card */}
      <div className="bg-blue-600 text-white rounded-xl p-5 mb-6 flex justify-between items-center shadow">
        <div>
          <p className="text-sm">Bank of ScotLand</p>
          <p className="font-semibold">Bryan Walker</p>
          <p className="mt-1 tracking-widest">•••• •••• •••• 9999</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Current Balance</p>
          <p className="text-2xl font-bold">£35,000,00</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full text-sm text-left bg-white">
          <thead className="bg-gray-50 text-gray-500 font-medium">
            <tr>
              <th className="px-4 py-3">Transaction</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img src={tx.avatar} alt={tx.name} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-gray-800">{tx.title}</span>
                </td>
                <td
                  className={`px-4 py-3 font-medium ${
                    tx.type === 'income' ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {tx.amount}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[tx.status]}`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{tx.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryStyles[tx.category]}`}
                  >
                    {tx.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
        <button className="px-3 py-1 border rounded">Previous</button>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`px-3 py-1 border rounded ${num === 1 ? 'bg-blue-600 text-white' : ''}`}
            >
              {num}
            </button>
          ))}
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 border rounded">10</button>
        </div>
        <button className="px-3 py-1 border rounded">Next</button>
      </div>
    </div>
  );
};

export default TransactionHistory;
