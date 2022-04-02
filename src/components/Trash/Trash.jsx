import "../Notes/notes.css";
import pinned from "../../assets/icons/pinned.svg";
import archive from "../../assets/icons/archive.svg";
import restore from "../../assets/icons/restore.svg";
import { SearchBar } from "../SearchBar/SearchBar";
import { useData } from "../../contexts";
import { addNotes, addArchives } from "../../services";

export const Trash = () => {
  const { token, colors, data, dispatch } = useData();

  const restoreNote = async (notes, token) => {
    const res = await addNotes({ note: notes, encodedToken: token });
    dispatch({ type: "DELETE_TRASH", payload: notes._id });
    dispatch({ type: "LOAD_NOTES", payload: res.data.notes });
  };

  const addArchive = async (n, t) => {
    const res = await addArchives({ note: n, noteId: n._id, encodedToken: t });
    //console.log(res.data);
    dispatch({ type: "DELETE_TRASH", payload: n._id });
    dispatch({ type: "LOAD_ARCHIVES", payload: res.data.archives });
  };

  return (
    <>
      <SearchBar />
      <div className="notes-container">
        <h2>Trash</h2>
        {data.trash &&
          data.trash.map((item) => {
            return (
              <div
                className="note margin-t margin-b"
                key={item._id}
                style={{ backgroundColor: colors[item.colorIndex] }}
              >
                <div className="note-header">
                  <h4 className="text-md">{item.title}</h4>
                  <img src={pinned} className="pin action-icon" alt="pin" />
                </div>
                <div className="note-body text-sm text-justify">
                  {item.body}
                </div>
                <div className="text-left tag margin-t">{item.tags[0]}</div>
                <div className="note-footer text-sm margin-t margin-b">
                  <div className="date">Created on {item.date}</div>
                  <div className="action-icons margin-r">
                    <img
                      src={archive}
                      className="action-icon margin-r"
                      alt="archive"
                      onClick={() => addArchive(item, token)}
                    />
                    <img
                      src={restore}
                      className="action-icon"
                      alt="delete"
                      onClick={() => restoreNote(item, token)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
