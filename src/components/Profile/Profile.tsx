import "./profile.css";
import { useAuth, useData } from "../../contexts";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { setToken, user } = useAuth();
  const { data } = useData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    setToken(false);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="main">
      <div className="profile-card">
        <h2 className="text-center l-h-0">Profile Details</h2>
        <div className="profile-info">
          <span className="field-heading text-lg text-bold">Name </span>
          <span className="field-info text-md ">
            : {`${user.firstName} ${user.lastName}`}
          </span>
        </div>
        <div className="profile-info">
          <span className="field-heading text-lg text-bold">Email </span>
          <span className="field-info text-md">: {user.email}</span>
        </div>
        <div>
          <p>Notes: {data.notes.length}</p>
          <p>Pinned: {data.pinned.length}</p>
          <p>Archived: {data.archives.length}</p>
          <p>Trash: {data.trash.length}</p>
        </div>
        <button
          className="btn btn-solid-primary logout"
          onClick={logoutHandler}
        >
          Logout
          <i className="fa fa-sign-out margin-l"></i>
        </button>
      </div>
    </div>
  );
};
