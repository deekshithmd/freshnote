import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { DataReducer } from "../Reducer/DataReducer";
import { v4 as uuid } from "uuid";
import { addNotes, getNotes } from "../../services";
import { notesType } from "../../types/notes.type";
import { dataContextType } from "./DataContext.type";

const initialState = {
  notes: [],
  archives: [],
  pinned: [],
  labels: [
    { _id: uuid(), tag: "college" },
    { _id: uuid(), tag: "reminder" },
    { _id: uuid(), tag: "work" },
  ],
  trash: [],
  others: [],
  filtered: [],
};

const DataContext = createContext<dataContextType>({
  note: false,
  notes: [],
  isFiltered: false,
  colors: [],
  data: initialState,
  dispatch: () => null,
  token: "",
  setNote: () => null,
  setNotes: () => null,
  setIsFiltered: () => null,
  filtereddata: [],
});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, dispatch] = useReducer(DataReducer, initialState);
  const [note, setNote] = useState<boolean>(false);
  const [notes, setNotes] = useState<notesType[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const colors = [
    "#ffffb3",
    "#ffb3ff",
    "#ccffff",
    "#b3ecff",
    "#e6e6e6",
    "#b3ffff",
    "#ffc299",
  ];
  const token = localStorage.getItem("login") || "token";

  useEffect(() => {
    (async () => {
      const notes = JSON.parse(localStorage.getItem("notes") || "[]");
      notes &&
        notes?.map(async (item: notesType) => {
          await addNotes({ note: item, encodedToken: token });
        });
      const noteresponse = await getNotes({ encodedToken: token });
      dispatch({ type: "LOAD_NOTES", payload: noteresponse.data.notes });

      const archives = JSON.parse(localStorage.getItem("archives") || "[]");

      dispatch({
        type: "LOAD_ARCHIVES",
        payload: archives,
      });
    })();
  }, []);

  const filtereddata = isFiltered ? data.filtered : data.notes;

  return (
    <DataContext.Provider
      value={{
        token,
        note,
        setNote,
        notes,
        setNotes,
        colors,
        data,
        dispatch,
        filtereddata,
        setIsFiltered,
        isFiltered,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
