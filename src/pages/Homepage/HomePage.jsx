import React from "react";
import "./homepage.css";
import image from "../../assets/notes.svg";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <div className="grid-col-2">
        <div className="col-1">
          <h1>
            <span className="brand-text">FreshNote</span> Note Keeping
            Application
          </h1>
          <h3>Do you feel difficulty in keeping record of notes?</h3>
          <h2>Then we are here for you...</h2>
          <Link to="/notes">
            <button className="btn btn-solid-primary">Join Now</button>
          </Link>
          <Link to="/login" className="link-style-none text-md login-link">
            Already have an Account?
          </Link>
        </div>
        <div className="col-2">
          <img src={image} alt="im" />
        </div>
      </div>
    </>
  );
};
