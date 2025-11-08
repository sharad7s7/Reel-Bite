import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Sun, Moon } from "lucide-react";
import "../../styles/auth-shared.css"; // ✅ unified styling

const UserRegister = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/register",
        {
          fullName: `${firstName} ${lastName}`,
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const foodIcons = ["🍕", "🍔", "🥗", "🍩", "🍎", "🍪", "🥑", "🍰", "🍣", "🍞"];

  return (
    <div className="auth-page-wrapper">
      {/* Floating food icons */}
      <ul className="floating-foods">
        {foodIcons.map((icon, i) => (
          <li key={i} style={{ animationDelay: `${i * 2}s` }}>
            {icon}
          </li>
        ))}
      </ul>

      {/* Theme toggle */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Register Card */}
      <div className="auth-card" role="region" aria-labelledby="user-register-title">
        <header>
          <h1 id="user-register-title" className="auth-title">
            Create Your Account
          </h1>
          <p className="auth-subtitle">
            Join now to explore and enjoy delicious meals.
          </p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="two-col" style={{ display: "flex", gap: "12px" }}>
            <div className="field-group" style={{ flex: 1 }}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                placeholder="Jane"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="field-group" style={{ flex: 1 }}>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                autoComplete="family-name"
                required
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              required
            />
          </div>

          <button className="auth-submit" type="submit">
            Sign Up
          </button>
        </form>

        <div className="auth-alt-action">
          Already have an account?{" "}
          <Link to="/user/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
