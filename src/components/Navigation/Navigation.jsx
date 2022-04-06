import React from "react";
import "./navigation.css";
import notelogo from "../../assets/icons/note-logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts"
import { useNavigate } from "react-router-dom";
export const Navigation = () => {
  const { token, setToken } = useAuth();
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
          <div
            className="avatar avatar-text-xs avatar-text img-round user-profile"
            role="img"
            alt="Avatar"
          >
            MD
          </div>
        </li>
          <li className="list-inline-item">
            <button
              className="btn btn-icon-primary user-signout" onClick={()=>LogoutHandler()}
            >
              <Link to="/">
                <i className="fa fa-sign-out fa-2x"></i>
              </Link>
            </button>
          </li>
          </>
        )}
      </ul>
    </nav>
  );
};
