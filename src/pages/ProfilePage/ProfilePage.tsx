import "../NotesPage/notes.css";
import { Siderbar, Profile } from "../../components";
export const ProfilePage = () => {
  return (
    <div className="grid-col-3-7">
      <span className="col-1">
        <Siderbar />
      </span>
      <span className="col-2">
        <Profile />
      </span>
    </div>
  );
};
