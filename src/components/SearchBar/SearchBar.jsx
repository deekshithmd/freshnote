import "./searchbar.css";
import { useState } from "react";
import { useData } from "../../contexts";
export const SearchBar = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState();
  const [priority, setPriority] = useState("all");
  const { data, dispatch, setIsFiltered } = useData();

  const getFiltered = (filterv, datav, priorityv) => {
    setModal(false);
    setIsFiltered(true);
    const filter1 = filterv
      ? filterv === "All"
        ? datav
        : datav.filter((item) =>
            item.tags.some((i) => (i === filterv ? true : false))
          )
      : datav;

    const filter2 = priorityv
      ? priorityv === "all"
        ? filter1
        : filter1.filter((item) => item.priority === priorityv)
      : filter1;

    dispatch({ type: "FILTER", payload: filter2 });
  };

  const reset = () => {
    setModal(false);
    setIsFiltered(false);
  };

  return (
    <>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass searchbar-icon margin-r"></i>
        <input type="search" placeholder="Search here..." />
        <i
          className="fa-solid fa-filter searchbar-icon margin-r"
          onClick={() => setModal(true)}
        ></i>
      </div>
      {modal && (
        <div className="modal-container">
          <div className="modal">
            <section className="modal-header">
              <p className="subtitle-2 text-bold">Filter Notes</p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => setModal(false)}
              ></i>
            </section>
            <section className="modal-content text-md">
              <p>Filter By</p>
              <p>Labels</p>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">all</option>
                {data.labels.map((label) => (
                  <option key={label._id} value={label.tag}>
                    {label.tag}
                  </option>
                ))}
              </select>
              <p>Priority</p>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>all</option>
                <option>low</option>
                <option>high</option>
              </select>
            </section>
            <section className="modal-actions">
              <button
                className="btn btn-solid-primary margin-l close-modal"
                onClick={reset}
              >
                Reset
              </button>
              <button
                className="btn btn-solid-primary margin-l close-modal"
                onClick={() => getFiltered(filter, priority, data.notes)}
              >
                Filter
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
