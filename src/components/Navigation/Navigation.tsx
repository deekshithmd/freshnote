import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts";

export const Navigation = () => {
  const { token, setToken } = useAuth();
  const { theme, Toggle } = useTheme();
  const navigate = useNavigate();

  const LogoutHandler = () => {
    localStorage.clear();
    setToken(false);
    navigate("/");
  };

  return (
    <nav className="navigation-bar">
      <section className="brand logo">
        <Link to="/" className="brand">
          <span className="brand-text">FreshNote</span>
        </Link>
      </section>
      <ul className="list-style-none account-data">
        {!token && (
          <li className="list-inline-item">
            <Link to="/login" className="btn btn-solid-primary link-btn">
              Login
            </Link>
          </li>
        )}

        {token && (
          <>
            <li className="list-inline-item">
              <Link to="/notes" className="btn btn-solid-primary link-btn">
                Notes
              </Link>
            </li>
            <li className="list-inline-item">
              <button
                className="btn btn-icon-primary user-signout"
                onClick={LogoutHandler}
              >
                <Link to="/">
                  <i className="fa fa-sign-out fa-2x"></i>
                </Link>
              </button>
            </li>
          </>
        )}
        <li className="list-inline-item">
          <span className="nav-icon-link link-style-none">
            <i
              className={
                theme === "light"
                  ? "fas fa-sun nav-icon"
                  : "fas fa-moon nav-icon"
              }
              onClick={Toggle}
            ></i>
          </span>
        </li>
      </ul>
    </nav>
  );
};
