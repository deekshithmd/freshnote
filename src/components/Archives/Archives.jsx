import "../Notes/notes.css";
import search from "../../assets/icons/search.svg";
import pinned from "../../assets/icons/pinned.svg";
import label from "../../assets/icons/label.svg";
import remove from "../../assets/icons/delete.svg";
import archived from "../../assets/icons/archived.svg";
import edit from "../../assets/icons/edit.svg";
export const Archives = () => {
  return (
    <>
      <div className="search-bar">
        <img src={search} className="sidebar-icon margin-r" alt="f" />
        <input type="search" placeholder="Search here..." />
      </div>
      <div className="notes-container">
        <h2>Archived</h2>
        <div className="note margin-t margin-b">
          <div className="note-header">
            <h4 className="text-md">This is the Title of note</h4>
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
          <div className="text-left tag margin-t">Tag1</div>
          <div className="note-footer text-sm margin-t margin-b">
            <div className="date">31/03/2022</div>
            <div className="action-icons margin-r">
              <img
                src={archived}
                className="action-icon margin-r"
                alt="archive"
              />
              <img
                src={remove}
                className="action-icon"
                alt="delete"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
