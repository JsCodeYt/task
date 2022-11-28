import React, { useContext } from "react";
import Filter from "./Filter";
import "./index.css";
import List from "./List";

export default function StudentsList() {
  return (
    <>
      <div className="students">
        <Filter />
        <List />
      </div>
    </>
  );
}
