import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import TransactionHistory from './pages/TransactionHistory';
import PaymentTransfer from './pages/PaymentTransfer';
// import MyBanks from './pages/MyBanks';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Redirect root to /dashboard or /sign-in depending on auth */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Public routes */}
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />

          {/* Private routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/transaction-history"
            element={
              <PrivateRoute>
                <TransactionHistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment-transfer"
            element={
              <PrivateRoute>
                <PaymentTransfer />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/my-banks"
            element={
              <PrivateRoute>
                <MyBanks />
              </PrivateRoute>
            }
          /> */}

          {/* Catch-all for 404 */}
          <Route path="*" element={<h1 className="p-8 text-center">404 – Page Not Found</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
