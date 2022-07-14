import React, { useContext } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">TBooking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
