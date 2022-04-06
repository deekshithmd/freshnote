import "./notes.css";
import { useNavigate } from "react-router-dom";
import pinned from "../../assets/icons/pinned.svg";
import pin from "../../assets/icons/pin.svg";
import tag from "../../assets/icons/label.svg";
import remove from "../../assets/icons/delete.svg";
import archive from "../../assets/icons/archive.svg";
import edits from "../../assets/icons/edit.svg";
import paint from "../../assets/icons/paint-board.svg";
import { SearchBar } from "../SearchBar/SearchBar";
import { useData } from "../../contexts";
import { useState } from "react";
import {
  addArchives,
  addNotes,
  deleteNotes,
  updateNotes,
} from "../../services";

export const Notes = () => {
  const { note, setNote, colors, dispatch, data, filtereddata } = useData();
  const [edit, setEdit] = useState(false);
  const [label, setLabel] = useState(false);
  const [index, setIndex] = useState(0);
  const [editId, setEditId] = useState("");
  const [editData, setEditData] = useState("");
  const [tags, setTags] = useState([]);
  const token = localStorage.getItem("login");
  const navigate = useNavigate();

  const addNote = async (e) => {
    setNote(false);
    setLabel(false);
    e.preventDefault();
    const { notetitle, notebody } = e.target.elements;
    const notes = {
      title: notetitle.value,
      body: notebody.value,
      tags: tags,
      pinned: false,
      colorIndex: index,
      date: new Date().toLocaleDateString(),
    };
    setTags([]);
    const res = await addNotes({ note: notes, encodedToken: token });
    dispatch({ type: "LOAD_NOTES", payload: res.data.notes });
  };

  const deleteNote = async (item, t) => {
    dispatch({ type: "ADD_TRASH", payload: item });
    const res = await deleteNotes({ notesId: item._id, encodedToken: t });
    dispatch({ type: "LOAD_NOTES", payload: res.data.notes });
  };

  const addArchive = async (n, t) => {
    const res = await addArchives({ note: n, noteId: n._id, encodedToken: t });
    dispatch({ type: "LOAD_NOTES", payload: res.data.notes });
    dispatch({ type: "LOAD_ARCHIVES", payload: res.data.archives });
  };

  const editClick = (item) => {
    setEdit(true);
    setEditId(item._id);
    setEditData(item);
  };

  const updateNote = async (e) => {
    setEdit(false);
    setEditId("");
    setEditData("");
    setLabel(false);
    e.preventDefault();
    const { notetitle, notebody, notelabel } = e.target.elements;
    const notes = {
      title: notetitle.value,
      body: notebody.value,
      tags: [notelabel ? notelabel.value : ""],
      colorIndex: editData.colorIndex,
      date: new Date().toLocaleDateString(),
    };
    const res = await updateNotes({
      note: notes,
      notesId: editId,
      encodedToken: token,
    });
    dispatch({ type: "LOAD_NOTES", payload: res.data.notes });
  };

  const pinnedNote = async (item) => {
    const notes = {
      ...item,
      pinned: item.pinned === true ? false : true,
    };
    const res = await updateNotes({
      note: notes,
      notesId: item._id,
      encodedToken: token,
    });
    item.pinned
      ? dispatch({ type: "REMOVEPIN", payload: item })
      : dispatch({ type: "PINNOTE", payload: item });
    dispatch({ type: "LOAD_NOTES", payload: res.data.notes });
  };

  const getLabel = (e) => {
    const l = tags.concat(e.target.innerText);
    setTags(l);
  };

  return (
    <>
      <SearchBar />
      <div className="notes-container">
        {note && (
          <>
            <h2>Create Note</h2>
            <form
              onSubmit={addNote}
              autoComplete="off"
              className="note margin-t margin-b"
              style={{ backgroundColor: colors[index] }}
            >
              <div className="note-header">
                <h4 className="text-md">
                  <input
                    type="text"
                    name="notetitle"
                    placeholder="Enter title here..."
                    className="margin-l note-title text-lg"
                  />
                </h4>
              </div>
              <div className="note-body text-sm text-justify">
                <textarea
                  placeholder="Enter notes body here..."
                  className="notes-body"
                  name="notebody"
                  style={{ backgroundColor: colors[index] }}
                ></textarea>
              </div>
              {label && (
                <div className="label-chips">
                  {data.labels &&
                    data.labels.map((label) => {
                      return (
                        <span key={label._id}>
                          <span className="chip text-chip" onClick={getLabel}>
                            {label.tag}
                          </span>
                        </span>
                      );
                    })}
                </div>
              )}
              <div className="note-footer text-sm margin-t margin-b">
                <div className="date">{new Date().toLocaleDateString()}</div>
                <div className="action-icons margin-r">
                  <img
                    src={paint}
                    className="action-icon margin-r"
                    alt="paint"
                    onClick={() => {
                      setIndex(Math.floor(Math.random() * 7));
                    }}
                  />
                  <img
                    src={tag}
                    className="action-icon margin-r"
                    alt="label"
                    onClick={() => setLabel(true)}
                  />
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-solid-primary"
                value="Save Note"
              />
            </form>
          </>
        )}
        {data.pinned.length > 0 && <h2>Pinned Notes</h2>}
        {filtereddata &&
          filtereddata.map((item) => {
            return editId === item._id ? (
              edit && (
                <form
                  onSubmit={updateNote}
                  autoComplete="off"
                  className="note margin-t margin-b"
                  style={{ backgroundColor: colors[editData.colorIndex] }}
                >
                  <div className="note-header">
                    <h4 className="text-md">
                      <input
                        type="text"
                        name="notetitle"
                        value={editData.title}
                        className="margin-l note-title text-lg"
                        onChange={(e) =>
                          setEditData({ ...editData, title: e.target.value })
                        }
                      />
                    </h4>
                  </div>
                  <div className="note-body text-sm text-justify">
                    <textarea
                      value={editData.body}
                      className="notes-body"
                      name="notebody"
                      style={{ backgroundColor: colors[editData.colorIndex] }}
                      onChange={(e) =>
                        setEditData({ ...editData, body: e.target.value })
                      }
                    ></textarea>
                  </div>

                  {label && (
                    <input
                      type="text"
                      name="notelabel"
                      value={editData.tags[0]}
                      placeholder="Enter tag here..."
                      onChange={(e) =>
                        setEditData({ ...editData, tags: [e.target.value] })
                      }
                    />
                  )}
                  <div className="note-footer text-sm margin-t margin-b">
                    <div className="date">
                      Created on {new Date().toLocaleDateString()}
                    </div>
                    <div className="action-icons margin-r">
                      <img
                        src={paint}
                        className="action-icon margin-r"
                        alt="paint"
                        onClick={() => {
                          setIndex(Math.floor(Math.random() * 7));
                        }}
                      />
                      <img
                        src={tag}
                        className="action-icon margin-r"
                        alt="label"
                        onClick={() => setLabel(true)}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-solid-primary"
                    value="Update Note"
                  />
                </form>
              )
            ) : item.pinned ? (
              <>
                <div
                  className="note margin-t margin-b"
                  key={item._id}
                  style={{ backgroundColor: colors[item.colorIndex] }}
                >
                  <div className="note-header">
                    <h4 className="text-md">{item.title}</h4>

                    <img
                      src={pinned}
                      className="pin action-icon"
                      alt="pin"
                      onClick={() => pinnedNote(item)}
                    />
                  </div>
                  <div className="note-body text-sm text-justify">
                    {item.body}
                  </div>
                  <div className="note-footer text-sm margin-t margin-b">
                    <div className="date">Created on {item.date}</div>
                    <div className="action-icons margin-r">
                      <img
                        src={edits}
                        className="action-icon margin-r"
                        alt="edit"
                        onClick={() => editClick(item)}
                      />
                      <img
                        src={archive}
                        className="action-icon margin-r"
                        alt="archive"
                        onClick={() => addArchive(item, token)}
                      />
                      <img
                        src={tag}
                        className="action-icon margin-r"
                        alt="label"
                        onClick={() => navigate("/labels")}
                      />
                      <img
                        src={remove}
                        className="action-icon"
                        alt="delete"
                        onClick={() => deleteNote(item, token)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : null;
          })}
        {filtereddata.length > 0 && <h2>Other Notes</h2>}
        {filtereddata &&
          filtereddata.map((item) => {
            return editId === item._id ? (
              edit && !item.pinned && (
                <form
                  onSubmit={updateNote}
                  autoComplete="off"
                  className="note margin-t margin-b"
                  style={{ backgroundColor: colors[editData.colorIndex] }}
                >
                  <div className="note-header">
                    <h4 className="text-md">
                      <input
                        type="text"
                        name="notetitle"
                        value={editData.title}
                        className="margin-l note-title text-lg"
                        onChange={(e) =>
                          setEditData({ ...editData, title: e.target.value })
                        }
                      />
                    </h4>
                  </div>
                  <div className="note-body text-sm text-justify">
                    <textarea
                      value={editData.body}
                      className="notes-body"
                      name="notebody"
                      style={{ backgroundColor: colors[editData.colorIndex] }}
                      onChange={(e) =>
                        setEditData({ ...editData, body: e.target.value })
                      }
                    ></textarea>
                  </div>

                  {label && (
                    <input
                      type="text"
                      name="notelabel"
                      value={editData.tags[0]}
                      placeholder="Enter tag here..."
                      onChange={(e) =>
                        setEditData({ ...editData, tags: [e.target.value] })
                      }
                    />
                  )}
                  <div className="note-footer text-sm margin-t margin-b">
                    <div className="date">
                      Created on {new Date().toLocaleDateString()}
                    </div>
                    <div className="action-icons margin-r">
                      <img
                        src={paint}
                        className="action-icon margin-r"
                        alt="paint"
                        onClick={() => {
                          setIndex(Math.floor(Math.random() * 7));
                        }}
                      />
                      <img
                        src={tag}
                        className="action-icon margin-r"
                        alt="label"
                        onClick={() => setLabel(true)}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-solid-primary"
                    value="Update Note"
                  />
                </form>
              )
            ) : !item.pinned ? (
              <>
                <div
                  className="note margin-t margin-b"
                  key={item._id}
                  style={{ backgroundColor: colors[item.colorIndex] }}
                >
                  <div className="note-header">
                    <h4 className="text-md">{item.title}</h4>

                    <img
                      src={pin}
                      className="pin action-icon"
                      alt="pin"
                      onClick={() => pinnedNote(item)}
                    />
                  </div>
                  <div className="note-body text-sm text-justify">
                    {item.body}
                  </div>
                  <div className="note-footer text-sm margin-t margin-b">
                    <div className="date">Created on {item.date}</div>
                    <div className="action-icons margin-r">
                      <img
                        src={edits}
                        className="action-icon margin-r"
                        alt="edit"
                        onClick={() => editClick(item)}
                      />
                      <img
                        src={archive}
                        className="action-icon margin-r"
                        alt="archive"
                        onClick={() => addArchive(item, token)}
                      />
                      <img
                        src={tag}
                        className="action-icon margin-r"
                        alt="label"
                        onClick={() => navigate("/labels")}
                      />
                      <img
                        src={remove}
                        className="action-icon"
                        alt="delete"
                        onClick={() => deleteNote(item, token)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : null;
          })}
      </div>
    </>
  );
};
