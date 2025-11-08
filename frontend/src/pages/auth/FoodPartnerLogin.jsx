import React, { useEffect, useState } from "react";
import "../../styles/auth-shared.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const FoodPartnerLogin = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/food-partner/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(response.data);
      navigate("/create-food");
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  const foodIcons = ["🍕", "🍔", "🥗", "🍩", "🍎", "🍪", "🥑", "🍰", "🍣", "🍞"];

  return (
    <div className="auth-page-wrapper">
      {/* Floating emojis */}
      <ul className="floating-foods">
        {foodIcons.map((icon, i) => (
          <li key={i} style={{ animationDelay: `${i * 2}s` }}>
            {icon}
          </li>
        ))}
      </ul>

      {/* Theme toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Login Card */}
      <div className="auth-card" role="region" aria-labelledby="partner-login-title">
        <header>
          <h1 id="partner-login-title" className="auth-title">Partner Login</h1>
          <p className="auth-subtitle">
            Access your dashboard and manage your restaurant.
          </p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="business@example.com" required />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" required />
          </div>
          <button className="auth-submit" type="submit">
            Sign In
          </button>
        </form>

        <div className="auth-alt-action">
          New partner? <Link to="/food-partner/register">Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
