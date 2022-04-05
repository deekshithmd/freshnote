export const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_NOTES":
      return { ...state, notes: action.payload };
    case "LOAD_ARCHIVES":
      return { ...state, archives: action.payload };
    case "PINNED":
      return { ...state, pinned: [...state.pinned, action.payload] };
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
    default:
      return state;
  }
};
