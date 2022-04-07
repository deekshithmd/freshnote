import React from "react";
import "./navigation.css";
import notelogo from "../../assets/icons/note-logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts";

export const Navigation = () => {
  const { token, setToken } = useAuth();
  const { theme, Toggle } = useTheme();
  const navigate = useNavigate();

  const LogoutHandler = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("notes");
    localStorage.removeItem("archives");
    setToken(false);
    navigate("/");
  };

  return (
    <nav className="navigation-bar">
      <section className="brand logo">
        <Link to={token ? "/notes" : "/"} className="brand">
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
              <div className="avatar avatar-xs">
                <img
                  className="img-responsive img-round"
                  src="https://i.postimg.cc/28Zcgq1j/avatar.png"
                  alt="Avatar"
                />
              </div>
            </li>
            <li className="list-inline-item">
              <button
                className="btn btn-icon-primary user-signout"
                onClick={ LogoutHandler}
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
