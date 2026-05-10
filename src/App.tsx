/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import LandingPage from './pages/LandingPage';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import UserLayout from './layouts/UserLayout';
import UserDashboard from './pages/UserDashboard';
import SignupPage from './pages/SignupPage';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<LandingPage />} />
            
            {/* User Routes */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<SignupPage />} />
            
            <Route 
              path="/dashboard" 
              element={
                <UserLayout>
                  <UserDashboard />
                </UserLayout>
              } 
            />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            
            <Route 
              path="/admin/dashboard" 
              element={
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              } 
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </AuthProvider>
  );
}
