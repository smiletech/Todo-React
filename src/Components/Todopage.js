import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TodoCard from "./TodoCard";

function Todopage() {
  const [Complete, setComplete] = useState(0);
  const [array, setArray] = useState([]);

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("Note"));
    setArray(arr);
    let com = JSON.parse(localStorage.getItem("Completed"));
    setComplete(com.length);
  }, []);

  const deleteCard = (data) => {
    localStorage.setItem("Note", JSON.stringify(data));
    setArray(data);
  };

  const Done = (e) => {
    setComplete(e);
  };
  const EditValue = () => {};

  return (
    <>
      <Navbar />
      <div className="div-add">
        <Link to="/add">
          <button className="btn btn-primary mt-3 px-3">Add</button>
        </Link>
      </div>
      <main className="Main1">
        {array?.map((ele, index) => (
          <TodoCard
            key={index}
            obj1={ele}
            index={index}
            deleteCard={deleteCard}
            Done={Done}
            Edit={EditValue}
          />
        ))}
      </main>
      <div className="footer">Completed({Complete})</div>
    </>
  );
}

export default Todopage;
