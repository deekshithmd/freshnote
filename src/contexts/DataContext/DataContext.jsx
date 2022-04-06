import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { DataReducer } from "../Reducer/DataReducer";
import { v4 as uuid } from "uuid";
import { addNotes, getNotes } from "../../services";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(DataReducer, {
    notes: [],
    archives: [],
    pinned: [],
    labels: [
      { _id: uuid(), tag: "College" },
      { _id: uuid(), tag: "Reminder" },
      { _id: uuid(), tag: "Work" },
    ],
    trash: [],
    filtered: [],
  });
  const [note, setNote] = useState(false);
  const [notes, setNotes] = useState([]);

  const colors = [
    "#ffbb99",
    "#85e085",
    "#b3b3ff",
    "#ffff80",
    "#b3ffff",
    "#ffb3e6",
    "#e580ff",
  ];
  const token = localStorage.getItem("login");

  useEffect(() => {
    (async () => {
      const notes = JSON.parse(localStorage.getItem("notes"));
      notes &&
        notes.map(async (item) => {
          await addNotes({ note: item, encodedToken: token });
        });
      const noteresponse = await getNotes({ encodedToken: token });
      dispatch({ type: "LOAD_NOTES", payload: noteresponse.data.notes });

      const archives = JSON.parse(localStorage.getItem("archives"));

      dispatch({
        type: "LOAD_ARCHIVES",
        payload: archives,
      });
    })();
  }, []);

  const filtereddata = data.filtered.length > 0 ? data.filtered : data.notes;

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
