import "./notes.css"
import { Siderbar } from "../../components";
import { Notes } from "../../components";
export const NotesPage = () => {
  return (
    <div className="grid-col-3-7">
      <span className="col-1"><Siderbar/></span>
      <span className="col-2"><Notes/></span>
    </div>
  );
};
