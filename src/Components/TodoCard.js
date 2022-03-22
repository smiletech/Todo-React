import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Draggable } from "react-beautiful-dnd";
import { List } from "@material-ui/core";
toast.configure();
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
  let navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);

  let d = new Date(date);
  let date1 = convertDate(d);

  const notifyW = () => {
    toast.warning("Your Task completed", { autoClose: 3000 });
  };

  useEffect(() => {
    doneArray = JSON.parse(localStorage.getItem("Completed"));
  }, []);

  const CheckHandler = (index) => {
    if (window.confirm("Your Task Completed !..")) {
      notifyW();
      console.log("index.............." + index);
      let Complete = JSON.parse(localStorage.getItem("Note")) || [];
      let Completed = JSON.parse(localStorage.getItem("Completed")) || [];
      Completed.push(Complete[index]);
      localStorage.setItem("Completed", JSON.stringify(Completed));
      Complete.splice(index, 1);
      localStorage.setItem("Note", JSON.stringify(Complete));
      Done(Completed.length);
      deleteCard(Complete);
    } else {
      navigate("/list");
    }
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
      <Draggable draggableId={index.toString()} index={index}>
        {(providered, snapshot) => (
          <div
            className="todo-card ms-4"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            {...providered.draggableProps}
            {...providered.dragHandleProps}
            ref={providered.innerRef}
          >
            <div className="Date-tilte">
              <button
                onClick={() => CheckHandler(index)}
                className={hovered ? "animated" : "btn1"}
              >
                <i class="bi bi-check2-square"></i>
              </button>
              <p className="ms-2">{date1}</p>
            </div>

            <h4>{Title}</h4>
            <div className="Fun">
              <Link to={`/update/${obj1.id}`} state={obj1}>
                <button
                  onClick={EditHandler}
                  className={hovered ? "animated" : "btn1"}
                >
                  <i class="bi bi-pencil-square"></i>
                </button>
              </Link>
              <button
                onClick={DeleteHandler}
                className={hovered ? "animated" : "btn1"}
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
            {providered.placeholder}
          </div>
        )}
      </Draggable>
    </>
  );
}

export default TodoCard;
