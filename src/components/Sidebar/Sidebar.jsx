import "./sidebar.css";
import React from "react";
import archived from "../../assets/icons/archived.svg";
import trash from "../../assets/icons/trash.svg";
import profile from "../../assets/icons/profile.svg";
import label from "../../assets/icons/labels.svg";
import home from "../../assets/icons/home.svg";
import { Link } from "react-router-dom";
import { useData } from "../../contexts";
import { useNavigate } from "react-router-dom";

export const Siderbar = () => {
  const navigate=useNavigate()
  const { setNote } = useData();
  return (
    <>
      <ul className="list-style-none notes-sidebar">
        <li className="inline-item text-md">
          <Link to="/notes" className="link-style-none">
            <img src={home} className="sidebar-icon margin-r" alt="f" />
            Home
          </Link>
        </li>

        <li className="inline-item text-md">
          <Link to="/labels" className="link-style-none">
            <img src={label} className="sidebar-icon margin-r" alt="f" />
            Labels
          </Link>
        </li>

        <li className="inline-item text-md">
          <Link to="/archives" className="link-style-none">
            <img src={archived} className="sidebar-icon margin-r" alt="f" />
            Archives
          </Link>
        </li>

        <li className="inline-item text-md">
          <Link to="/trash" className="link-style-none">
            <img src={trash} className="sidebar-icon margin-r" alt="f" />
            Trash
          </Link>
        </li>

        <li className="inline-item text-md">
          <Link to="/" className="link-style-none">
            <img src={profile} className="sidebar-icon margin-r" alt="f" />
            Profile
          </Link>
        </li>
        <button className="btn btn-solid-primary" onClick={()=>{setNote(true);navigate("/notes")}}>Create New Note</button>
      </ul>
    </>
  );
};
