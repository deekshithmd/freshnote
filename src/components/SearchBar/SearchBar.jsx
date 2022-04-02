import "./searchbar.css";
import { useState } from "react";
export const SearchBar = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState();
  const [sort, setSort] = useState();
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
              <p className="subtitle-2 text-bold">Sort & Filter Notes</p>
              <i className="fa-solid fa-xmark" onClick={() => setModal(false)}></i>
            </section>
            <section className="modal-content text-md">
              <p>Sort By</p>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
              </select>
              <p>Filter By</p>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>Label1</option>
                <option>Label2</option>
                <option>Label3</option>
              </select>
              {filter === "Label1" ? (
                <div>
                  <input type="checkbox" />
                  Label1
                  <input type="checkbox" />
                  Label2
                </div>
              ) : (
                ""
              )}
            </section>
            <section className="modal-actions">
              <button className="btn btn-solid-primary margin-l close-modal">
                Done
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
