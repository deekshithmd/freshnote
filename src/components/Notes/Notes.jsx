import "./notes.css";
import search from "../../assets/icons/search.svg";
import pinned from "../../assets/icons/pinned.svg";
import label from "../../assets/icons/label.svg";
import remove from "../../assets/icons/delete.svg";
import archive from "../../assets/icons/archive.svg";
import edit from "../../assets/icons/edit.svg";
import paint from "../../assets/icons/paint-board.svg";

export const Notes = () => {
  return (
    <>
      <div className="search-bar">
        <img src={search} className="sidebar-icon margin-r" alt="f" />
        <input type="search" placeholder="Search here..." />
      </div>
      <div className="notes-container">
        <h2>Create Note</h2>
        <form autoComplete="off" className="note margin-t margin-b">
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
            ></textarea>
          </div>
          <input type="text" name="notelabel" placeholder="Enter tag here..." />
          <div className="note-footer text-sm margin-t margin-b">
            <div className="date">31/03/2022</div>
            <div className="action-icons margin-r">
              <img src={paint} className="action-icon margin-r" alt="paint" />
              <img src={label} className="action-icon margin-r" alt="label" />
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-solid-primary"
            value="Save Note"
          />
        </form>
        <form
          autoComplete="off"
          className="note margin-t margin-b"
        >
          <div className="note-header">
            <h4 className="text-md">
              <input
                type="text"
                name="notetitle"
                value="Title here"
                className="margin-l note-title text-lg"
              />
            </h4>
          </div>
          <div className="note-body text-sm text-justify">
            <textarea
              value="body here"
              className="notes-body"
              name="notebody"
            ></textarea>
          </div>

          <input
            type="text"
            name="notelabel"
            value="label1"
            placeholder="Enter tag here..."
          />
          <div className="note-footer text-sm margin-t margin-b">
            <div className="date">31/03/2022</div>
            <div className="action-icons margin-r">
              <img src={paint} className="action-icon margin-r" alt="paint" />
              <img src={label} className="action-icon margin-r" alt="label" />
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-solid-primary"
            value="Update Note"
          />
        </form>
        <h1>Notes</h1>
        <div className="note margin-t margin-b">
          <div className="note-header">
            <h4 className="text-md">Title1</h4>

            <img src={pinned} className="pin action-icon" alt="f" />
          </div>
          <div className="note-body text-sm text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </div>
          <div className="note-footer text-sm margin-t margin-b">
            <div className="date">Created on 31/03/2022</div>
            <div className="action-icons margin-r">
              <img src={edit} className="action-icon margin-r" alt="edit" />
              <img
                src={archive}
                className="action-icon margin-r"
                alt="archive"
              />
              <img src={label} className="action-icon margin-r" alt="label" />
              <img src={remove} className="action-icon" alt="delete" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
