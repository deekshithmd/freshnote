import { notesType } from "../../types/notes.type";

type tagType = {
  _id: any;
  tag: string;
};

export type reducerType =
  | {
      type: "LOAD_NOTES";
      payload: notesType[];
    }
  | {
      type: "LOAD_ARCHIVES";
      payload: notesType[];
    }
  | {
      type: "PINNOTE";
      payload: notesType;
    }
  | {
      type: "REMOVEPIN";
      payload: notesType;
    }
  | {
      type: "OTHERS";
      payload: notesType;
    }
  | {
      type: "ADD_LABEL";
      payload: tagType;
    }
  | {
      type: "DELETE_LABEL";
      payload: any;
    }
  | {
      type: "ADD_TRASH";
      payload: notesType;
    }
  | {
      type: "DELETE_TRASH";
      payload: any;
    }
  | {
      type: "FILTER";
      payload: notesType[];
    };
