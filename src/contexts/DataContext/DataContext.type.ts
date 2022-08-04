import { notesType, tagType } from "types/notes.type";
import { reducerType } from "../Reducer/Datareducer.type";

export type initialStateType = {
  notes: notesType[];
  archives: notesType[];
  pinned: notesType[];
  trash: notesType[];
  filtered: notesType[];
  labels: tagType[];
  others: notesType[];
};

export type dataContextType = {
  note: boolean;
  notes: notesType[];
  isFiltered: boolean;
  colors: string[];
  data: initialStateType;
  dispatch: React.Dispatch<reducerType>;
  token: string;
  setNote: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes: React.Dispatch<React.SetStateAction<notesType[]>>;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  filtereddata: notesType[];
};
