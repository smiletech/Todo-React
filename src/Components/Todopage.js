import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import TodoCard from "./TodoCard";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
toast.configure();

function Todopage() {
  const [Complete, setComplete] = useState(0);
  const [array, setArray] = useState([]);
  const [Done1, setDone1] = useState([]);
  const [flag, setflag] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("Note"));
    setArray(arr);
    let com = JSON.parse(localStorage.getItem("Completed"));
    setComplete(com.length);
    checkup();
  }, [flag]);
  const notify = () => {
    toast.success("Welcome To Add", { autoClose: 3000 });
  };

  const checkup = () => {
    const ARRDATA = JSON.parse(localStorage.getItem("Note"));
    ARRDATA.length === 0 ? setflag(false) : setflag(true);
    console.log(ARRDATA.length);
    flag ? navigate("/list") : navigate("/default");
  };

  async function timeDelay() {
    await setTimeout(() => {}, 3000);
  }

  const deleteCard = (data) => {
    localStorage.setItem("Note", JSON.stringify(data));
    setArray(data);
    checkup();
  };

  const Done = (e) => {
    setComplete(e);
  };
  const EditValue = () => {};

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    let add;
    let active = array;
    let complete = Done1;
    // Source Logic
    if (source.droppableId === "TodoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodoList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setDone1(complete);
    setArray(active);

    console.log("............." + result + source.index);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Navbar />
        <div className="div-add">
          <Link to="/add">
            <button onClick={notify} className="btn btn-primary mt-3 px-3">
              Add
            </button>
          </Link>
        </div>
        <Droppable droppableId="TodoList">
          {(providered) => (
            <main
              className="Main1"
              ref={providered.innerRef}
              {...providered.droppableId}
            >
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
              {providered.placeholder}
            </main>
          )}
        </Droppable>

        <div className="footer">Completed({Complete})</div>
      </DragDropContext>
    </>
  );
}

export default Todopage;
