import { createContext, useContext, useState, useReducer } from "react";
import { DataReducer } from "../Reducer/DataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(DataReducer, {
    notes: [],
    archives: [],
    labels: [],
    trash: [],
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

  return (
    <DataContext.Provider
      value={{ token,note, setNote, notes, setNotes, colors, data, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
