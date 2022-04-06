import "./sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts";
import { useNavigate } from "react-router-dom";

export const Siderbar = () => {
  const navigate = useNavigate();
  const { setNote } = useData();
  return (
    <>
      <ul className="list-style-none notes-sidebar">
        <li className="inline-item text-md">
          <Link to="/notes" className="link-style-none">
            <i className="fa-solid fa-house-chimney sidebar-icon margin-r"></i>
            Home
          </Link>
        </li>

        <li className="inline-item text-md">
          <Link to="/labels" className="link-style-none">
            <i className="fa-solid fa-tag sidebar-icon margin-r"></i>
            Labels
          </Link>
        </li>

        <li className="inline-item text-md">
          <Link to="/archives" className="link-style-none">
            <i className="fa-solid fa-box-archive sidebar-icon margin-r"></i>
            Archives
          </Link>
        </li>

        <li className="inline-item text-md">
          <Link to="/trash" className="link-style-none">
            <i className="fa-solid fa-trash sidebar-icon margin-r"></i>
            Trash
          </Link>
        </li>

        <li className="inline-item text-md">
          <Link to="/" className="link-style-none">
            <i className="fa-solid fa-user-large sidebar-icon margin-r"></i>
            Profile
          </Link>
        </li>
        <button
          className="btn btn-solid-primary"
          onClick={() => {
            setNote(true);
            navigate("/notes");
          }}
        >
          Create New Note
        </button>
      </ul>
    </>
  );
};
