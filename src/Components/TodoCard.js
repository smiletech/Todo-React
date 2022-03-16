import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let doneArray = "";

doneArray = JSON.parse(localStorage.getItem("Completed")) || [];
// localStorage.setItem("Completed", JSON.stringify(doneArray));

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

function TodoCard({ obj1, index, deleteCard, Done }) {
  const { id, Title, Note, date } = obj1;
  const [arrayval, setarrayval] = useState([]);

  let d = new Date(date);
  let date1 = convertDate(d);

  console.log("........#" + obj1.Title);

  useEffect(() => {
    doneArray = JSON.parse(localStorage.getItem("Completed"));
  });

  const CheckHandler = (index) => {
    console.log("index.............." + index);
    let Complete = JSON.parse(localStorage.getItem("Note")) || [];
    let Completed = JSON.parse(localStorage.getItem("Completed")) || [];
    Completed.push(Complete[index]);
    localStorage.setItem("Completed", JSON.stringify(Completed));
    Complete.splice(index, 1);
    localStorage.setItem("Note", JSON.stringify(Complete));
    Done(Completed.length);
    deleteCard(Complete);
  };

  const EditHandler = () => {};

  const DeleteHandler = () => {
    const ARRDATA = JSON.parse(localStorage.getItem("Note"));
    if (window.confirm("Do You Want To Delete Card !..")) {
      ARRDATA.splice(index, 1);
      deleteCard(ARRDATA);
    }
  };

  return (
    <>
      <div className="todo-card ms-4">
        <div className="Date-tilte">
          <button onClick={() => CheckHandler(index)} className="btn1">
            <i class="bi bi-check2-square"></i>
          </button>
          <p className="ms-2">{date1}</p>
        </div>

        <h4>{Title}</h4>
        <div className="Fun">
          <Link to={`/update/${obj1.id}`} state={obj1}>
            <button onClick={EditHandler} className="btn1">
              <i class="bi bi-pencil-square"></i>
            </button>
          </Link>
          <button onClick={DeleteHandler} className="btn1">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
