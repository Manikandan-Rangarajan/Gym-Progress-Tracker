import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Gym Tracker
          </Link>
          <div className="space-x-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/signup" className="hover:underline">
              Signup
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 text-center p-4 mt-10">
          &copy; {new Date().getFullYear()} Gym Tracker
        </footer>
      </div>
    </Router>
  );
}

export default App;
