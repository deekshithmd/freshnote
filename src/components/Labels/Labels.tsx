import "../Notes/notes.css";
import "./label.css";
import pinned from "../../assets/icons/pinned.svg";
import pin from "../../assets/icons/pin.svg";
import { v4 as uuid } from "uuid";
import { useData } from "../../contexts";
import { useState } from "react";
import { tagType, tagInitialState } from "types/notes.type";

export const Labels = () => {
  const { data, dispatch, colors } = useData();
  const [tag, setTag] = useState<string>("");
  const [label, setLabel] = useState<tagType>(tagInitialState);

  const addTag = () => {
    const tagObject = {
      _id: uuid(),
      tag: tag,
    };
    dispatch({ type: "ADD_LABEL", payload: tagObject });
    setTag("");
  };

  const deleteTag = (id: any) => {
    dispatch({ type: "DELETE_LABEL", payload: id });
  };

  const getLabeled = (e: any) => {
    setLabel({ _id: uuid(), tag: e.target.innerText });
  };
  return (
    <>
      <div className="notes-container">
        <div className="add-tag">
          <input
            className="input standard"
            type="text"
            value={tag}
            placeholder="Enter your tag"
            onChange={(e) => setTag(e.target.value)}
          />
          <button className="btn btn-solid-primary" onClick={() => addTag()}>
            Add tag
          </button>
        </div>
        <div className="labels">
          {data?.labels &&
            data?.labels?.map((label) => {
              return (
                <div key={label?._id}>
                  <div className="chip text-chip">
                    <span className="chip-text margin-r" onClick={getLabeled}>
                      {label?.tag}
                    </span>
                    <span
                      className="chip-close text-bold"
                      onClick={() => deleteTag(label._id)}
                    >
                      &times;
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <h2>{label.tag}</h2>
        {data.notes.map((item) => {
          if (item?.tags?.some((t) => t.tag === label.tag)) {
            return (
              <div
                className="note margin-t margin-b"
                key={item._id}
                style={{ backgroundColor: colors[item?.colorIndex] }}
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
                  {item.tags.map((tag) => (
                    <span className="tag-chip text-sm margin-l">
                      {tag?.tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm notes-priority margin-t">
                  Priority: {item.priority}
                </div>
                <div className="note-footer text-sm margin-t margin-b">
                  <div className="date">Created on {item?.date.toString()}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
