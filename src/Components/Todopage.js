import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TodoCard from "./TodoCard";

function Todopage() {
  return (
    <>
      <Navbar />
      <div className="div-add">
        <Link to="/add">
          <button className="btn btn-primary mt-3 px-3">Add</button>
        </Link>
      </div>
      <main className="Main1">
        <TodoCard />
      </main>
      <div className="footer">Completed(0)</div>
    </>
  );
}

export default Todopage;
