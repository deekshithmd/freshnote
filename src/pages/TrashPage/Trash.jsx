import React from "react";
import "../NotesPage/notes.css"
import { Siderbar,Trash } from "../../components";
export const TrashPage = () => {
  return (
    <div className="grid-col-3-7">
      <span className="col-1"><Siderbar/></span>
      <span className="col-2"><Trash/></span>
    </div>
  );
};
