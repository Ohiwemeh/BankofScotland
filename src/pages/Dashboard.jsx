import { useState } from "react";

const Dashboard = () => {
     const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <div className="flex flex-col lg:flex-row min-h-screen bg-[#1E1E2F] text-white">
    {/* Mobile Toggle Button */}
      <button
        className="md:hidden absolute top-4 left-4 z-50 bg-blue-600 p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-[#111827] p-4 z-40 fixed md:static h-full transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-8">🏦 Bank of Scotland</h1>
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 bg-blue-600 rounded">Home</a>
          <a href="/transaction-history" className="block py-2 px-4 hover:bg-gray-700 rounded">Transaction History</a>
          <a href="/payment-transfer" className="block py-2 px-4 hover:bg-gray-700 rounded">Payment Transfer</a>
        </nav>
      </aside>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

  {/* Main Content */}
  <main className="flex-1 p-4 sm:p-6 overflow-y-auto order-last lg:order-none">
    <header className="mb-6">
      <h2 className="text-xl">Welcome, <span className="text-blue-500">Bryan</span></h2>
      <p className="text-sm text-gray-400">Access & manage your account and transactions efficiently.</p>
    </header>

    <section className="bg-[#111827] p-4 rounded-lg mb-6">
      <h3 className="mb-2">2 Bank Accounts</h3>
      <p className="text-3xl font-bold">£35,000.00</p>
    </section>

    <section className="bg-[#111827] p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-gray-400 text-left">
            <tr>
              <th className="py-2">Transaction</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
              <th className="py-2">Date</th>
              <th className="py-2">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="py-2">Spotify</td>
              <td className="py-2 text-red-400">- £15.00</td>
              <td className="py-2">Processing</td>
              <td className="py-2">Wed 1:00pm</td>
              <td className="py-2">Subscriptions</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="py-2">Salary</td>
              <td className="py-2 text-green-400">+ £10,000.00</td>
              <td className="py-2">Success</td>
              <td className="py-2">Mon 9:00am</td>
              <td className="py-2">Income</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="py-2">Amazon</td>
              <td className="py-2 text-red-400">- £120.00</td>
              <td className="py-2">Success</td>
              <td className="py-2">Tue 3:30pm</td>
              <td className="py-2">Groceries</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="py-2">Freelance</td>
              <td className="py-2 text-green-400">+ £5,000.00</td>
              <td className="py-2">Success</td>
              <td className="py-2">Thu 10:00am</td>
              <td className="py-2">Deposit</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="py-2">Netflix</td>
              <td className="py-2 text-red-400">- £13.99</td>
              <td className="py-2">Processing</td>
              <td className="py-2">Fri 11:00pm</td>
              <td className="py-2">Subscriptions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>

  {/* Right Sidebar */}
  <aside className="w-full lg:w-80 bg-[#111827] p-4">
    <div className="text-center mb-6">
     
      <h3 className="mt-2 font-bold">Bryan Walker</h3>
      <p className="text-gray-400 text-sm break-all">bryanwalker@gmail.com</p>
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
};

export default Dashboard;