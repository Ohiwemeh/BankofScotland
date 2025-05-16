import { useState } from 'react';


export default function PaymentTransfer() {
  const [form, setForm] = useState({
    recipient: '',
    amount: '',
    note: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer initiated:", form);
    // You can add your actual transfer logic here (API, DB, etc.)
  };

  return (
    <div className="flex h-screen bg-[#1E1E2F] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] p-4 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">🏦 Bank of Scotland</h1>
        <nav className="space-y-4">
          <a href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</a>
          <a href="/transaction-history" className="block py-2 px-4 hover:bg-gray-700 rounded">Transaction History</a>
          <a href="#" className="block py-2 px-4 bg-blue-600 rounded">Payment Transfer</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <header className="mb-6">
          <h2 className="text-xl">Transfer Funds</h2>
          <p className="text-sm text-gray-400">Send money to your recipients quickly and securely.</p>
        </header>

        <section className="bg-[#111827] p-6 rounded-lg max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-gray-300">Recipient Name</label>
              <input
                type="text"
                name="recipient"
                value={form.recipient}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[#1E1E2F] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Alexa Doe"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-300">Amount</label>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[#1E1E2F] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 100.00"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-300">Note (Optional)</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[#1E1E2F] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. For groceries"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Transfer
            </button>
          </form>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-[#111827] p-4 hidden lg:block">
        <div className="text-center mb-6">
          
          <h3 className="mt-2 font-bold">Bryan Walker</h3>
          <p className="text-gray-400 text-sm">bryanwalker@gmail.com</p>
        </div>

        <section className="mb-6">
          <h4 className="text-sm text-gray-400 mb-2">My Banks</h4>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
            <p className="text-xs">Bryan Walker</p>
            <p className="text-sm mt-1">**** **** **** 9999</p>
            <p className="text-xs mt-2">06/24</p>
          </div>
        </section>

        <section>
          <h4 className="text-sm text-gray-400 mb-2">My Budgets</h4>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm">
                <span>Subscriptions</span>
                <span className="text-gray-400">£25 left</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full mt-1">
                <div className="bg-blue-600 h-full w-1/4 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span>Food and booze</span>
                <span className="text-gray-400">£120 left</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full mt-1">
                <div className="bg-pink-600 h-full w-2/3 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span>Savings</span>
                <span className="text-gray-400">£50 left</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full mt-1">
                <div className="bg-green-600 h-full w-1/2 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}
