import "../Notes/notes.css";
import pinned from "../../assets/icons/pinned.svg";
import pin from "../../assets/icons/pin.svg";
import archive from "../../assets/icons/archive.svg";
import restore from "../../assets/icons/restore.svg";
import deleten from "../../assets/icons/trash.svg";
import { useData } from "../../contexts";
import { addNotes, addArchives } from "../../services";
import { notesType } from "types/notes.type";

export const Trash = () => {
  const { token, colors, data, dispatch } = useData();

  const restoreNote = async (notes: notesType, token: string) => {
    const res = await addNotes({ note: notes, encodedToken: token });
    dispatch({ type: "DELETE_TRASH", payload: notes._id });
    dispatch({ type: "LOAD_NOTES", payload: res.data.notes });
  };

  return (
    <>
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
                  <img
                    src={item.pinned ? pinned : pin}
                    className="pin action-icon"
                    alt="pin"
                  />
                </div>
                <div className="note-body text-sm text-justify">
                  {item.body}
                </div>
                <div className="text-sm notes-tags margin-t">
                  Tags:{" "}
                  {item?.tags?.map((tag) => (
                    <span className="tag-chip text-sm margin-l">
                      {tag?.tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm notes-priority margin-t">
                  Priority: {item.priority}
                </div>
                <div className="note-footer text-sm margin-t margin-b">
                  <div className="date">Created on {item.date.toString()}</div>
                  <div className="action-icons margin-r">
                    <img
                      src={restore}
                      className="action-icon margin-r"
                      alt="delete"
                      onClick={() => restoreNote(item, token)}
                    />
                    <img
                      src={deleten}
                      className="action-icon"
                      alt="delete"
                      onClick={() =>
                        dispatch({ type: "DELETE_TRASH", payload: item._id })
                      }
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
