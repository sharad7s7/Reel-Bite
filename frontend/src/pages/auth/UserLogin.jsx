import React, { useEffect, useState } from "react";
import "../../styles/auth-shared.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(response.data);
      navigate("/");

    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  };

  const foodIcons = ["🍕", "🍔", "🥗", "🍩", "🍎", "🍪", "🥑", "🍰", "🍣", "🍞"];

  return (
    <div className="auth-page-wrapper">
      <ul className="floating-foods">
        {foodIcons.map((icon, i) => (
          <li key={i} style={{ animationDelay: `${i * 2}s` }}>{icon}</li>
        ))}
      </ul>

      <div className="auth-card">
        <header>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue your food journey.</p>
        </header>
         <nav className="auth-alt-action" style={{ marginTop: "-4px" }}>
                  <strong style={{ fontWeight: 600 }}>Switch To:</strong>{" "}
                  <Link to="/food-partner/login"> Food Partner</Link>
                </nav>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" required />
          </div>
          <button className="auth-submit" type="submit">Sign In</button>
        </form>
        <div className="auth-alt-action">
          New here? <Link to="/user/register">Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
