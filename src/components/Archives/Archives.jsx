import "../Notes/notes.css";
import pinned from "../../assets/icons/pinned.svg";
import remove from "../../assets/icons/delete.svg";
import archived from "../../assets/icons/archived.svg";
import { SearchBar } from "../SearchBar/SearchBar";
import { useData } from "../../contexts";
import { restoreArchives, deleteArchives } from "../../services";

export const Archives = () => {
  const { token, colors, data, dispatch } = useData();

  const unArchive = async (id, t) => {
    const res = await restoreArchives({ noteId: id, encodedToken: t });
    dispatch({ type: "LOAD_NOTES", payload: res.data.notes });
    dispatch({ type: "LOAD_ARCHIVES", payload: res.data.archives });
  };

  const deleteArchive = async (item, t) => {
    dispatch({ type: "ADD_TRASH", payload: item });
    const res = await deleteArchives({ noteId: item._id, encodedToken: t });
    dispatch({ type: "LOAD_ARCHIVES", payload: res.data.archives });
  };

  return (
    <>
      <SearchBar />
      <div className="notes-container">
        <h2>Archived</h2>
        {data.archives &&
          data.archives.map((item) => {
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
                {item.tags && (
                  <div className="text-left tag margin-t">{item.tags[0]}</div>
                )}
                <div className="note-footer text-sm margin-t margin-b">
                  <div className="date">{item.date}</div>
                  <div className="action-icons margin-r">
                    <img
                      src={archived}
                      className="action-icon margin-r"
                      alt="archive"
                      onClick={() => unArchive(item._id, token)}
                    />
                    <img
                      src={remove}
                      className="action-icon"
                      alt="delete"
                      onClick={() => deleteArchive(item, token)}
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
