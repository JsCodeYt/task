import React, { useState } from "react";
import "./index.css"

export default function Filter() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  return (
    <div className="filter">
      <div className="filter__option">
        <span>Filter</span>
        <select
          className="filter-option__container"
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="F.I.O">F.I.O</option>
          <option value="Shartnoma">Shartnoma</option>
          <option value="Level">Level</option>
          <option value="Address">Addres</option>
        </select>
      </div>
      <div className="filter__search">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
