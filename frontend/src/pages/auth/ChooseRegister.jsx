import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, UtensilsCrossed, LogIn} from "lucide-react";
import "../../styles/auth-shared.css"; // ✅ use shared theme, not choose-register.css

const ChooseRegister = () => {

  const foodIcons = ["🍕", "🍔", "🥗", "🍩", "🍎", "🍪", "🥑", "🍰", "🍣", "🍞"];

  return (
    <div className="auth-page-wrapper">
      {/* Floating Food Icons 🍕 */}
      <ul className="floating-foods">
        {foodIcons.map((icon, i) => (
          <li key={i} style={{ animationDelay: `${i * 2}s` }}>
            {icon}
          </li>
        ))}
      </ul>

      {/* Main Card */}
      <div className="auth-card" role="region" aria-labelledby="choose-register-title">
        <header>
          <h1 id="choose-register-title" className="auth-title">
            Create an Account
          </h1>
          <p className="auth-subtitle">
            Choose how you want to join our platform.
          </p>
        </header>

        <div className="register-options" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link to="/user/register" className="register-btn primary">
            <UserPlus size={22} />
            Register as Normal User
          </Link>

          <Link to="/food-partner/register" className="register-btn secondary">
            <UtensilsCrossed size={22} />
            Register as Food Partner
          </Link>
        </div>

        <div className="auth-alt-action">
          Already have an account?{" "}
          <Link to="/user/login" className="login-link">
            <LogIn size={16} /> Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseRegister;
