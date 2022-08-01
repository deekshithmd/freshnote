import "../NotesPage/notes.css";
import { Siderbar, Archives } from "../../components";
export const ArchivesPage = () => {
  return (
    <div className="grid-col-3-7">
      <span className="col-1">
        <Siderbar />
      </span>
      <span className="col-2">
        <Archives />
      </span>
    </div>
  );
};
