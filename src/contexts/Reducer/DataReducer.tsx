import { reducerType } from "./Datareducer.type";
import { initialStateType } from "contexts/DataContext/DataContext.type";

export const DataReducer = (state: initialStateType, action: reducerType) => {
  switch (action.type) {
    case "LOAD_NOTES":
      localStorage.setItem("notes", JSON.stringify(action.payload));
      return { ...state, notes: action.payload };
    case "LOAD_ARCHIVES":
      localStorage.setItem("archives", JSON.stringify(action.payload));
      return { ...state, archives: action.payload };
    case "PINNOTE":
      return { ...state, pinned: [...state.pinned, action.payload] };
    case "REMOVEPIN":
      return {
        ...state,
        pinned: [
          ...state.pinned.filter((note) => note._id !== action?.payload?._id),
        ],
      };
    case "ADD_LABEL":
      return { ...state, labels: [...state.labels, action.payload] };
    case "DELETE_LABEL":
      return {
        ...state,
        labels: [...state.labels.filter((item) => item._id !== action.payload)],
      };
    case "ADD_TRASH":
      return { ...state, trash: [...state.trash, action.payload] };
    case "DELETE_TRASH":
      return {
        ...state,
        trash: [...state.trash.filter((item) => item._id !== action.payload)],
      };
    case "FILTER":
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};
