import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import TransactionHistory from './pages/TransactionHistory';
import PaymentTransfer from './pages/PaymentTransfer';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Redirect root to dashboard */}
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

        {/* Catch-all for 404 */}
        <Route path="*" element={<h1 className="p-8 text-center">404 – Page Not Found</h1>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
