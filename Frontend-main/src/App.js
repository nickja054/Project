import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './pages/Navbar';
import MemberList from './pages/MemberList';
import AddMember from './pages/AddMember';
import Payment from './pages/Payment';
import Summary from './pages/Summary';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reports from './pages/Reports';
import AddFinger from './pages/AddFinger';

function App() {
  const location = useLocation();
  const shouldShowNavbar = !['/login', '/register', '/'].includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/memberlist" element={<MemberList />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/add-finger" element={<AddFinger />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
