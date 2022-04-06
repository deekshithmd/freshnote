import "./searchbar.css";
import { useState } from "react";
import { useData } from "../../contexts";
export const SearchBar = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState();
  const { data, dispatch } = useData();

  const getFiltered = (filterv, datav) => {
    setModal(false);
    const filtered = datav.filter((item) =>
      item.tags.some((i) => (i === filterv ? true : false))
    );
    dispatch({ type: "FILTER", payload: filtered });
  };

  const reset = (datav) => {
    setModal(false);
    dispatch({ type: "FILTER", payload: [] });
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
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>College</option>
                <option>Reminder</option>
                <option>Work</option>
              </select>
            </section>
            <section className="modal-actions">
              <button
                className="btn btn-solid-primary margin-l close-modal"
                onClick={() => reset(data.notes)}
              >
                Reset
              </button>
              <button
                className="btn btn-solid-primary margin-l close-modal"
                onClick={() => getFiltered(filter, data.notes)}
              >
                Done
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
