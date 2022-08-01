import "../NotesPage/notes.css";
import { Siderbar, Labels } from "../../components";
export const LabelsPage = () => {
  return (
    <div className="grid-col-3-7">
      <span className="col-1">
        <Siderbar />
      </span>
      <span className="col-2">
        <Labels />
      </span>
    </div>
  );
};
