import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import TodoCard from "./TodoCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Modale from "./Modale";

toast.configure();

function Todopage() {
  const [Complete, setComplete] = useState(0);
  const [array, setArray] = useState([]);
  const [Done1, setDone1] = useState([]);
  const [flag, setflag] = useState(true);
  const [Check, setCheck] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("Note")) || [];
    setArray(arr);

    let com = JSON.parse(localStorage.getItem("Completed")) || [];
    setComplete(com.length);

    checkup();
  }, [flag]);

  const notify = () => {
    toast.success("Welcome To Add", { autoClose: 3000 });
  };
  const notifyE = () => {
    toast.error("Delete Sucessfully", { autoClose: 3000 });
  };
  const checkup = () => {
    const ARRDATA = JSON.parse(localStorage.getItem("Note"));
    ARRDATA.length === 0 ? setflag(false) : setflag(true);
    console.log(ARRDATA.length);
    flag ? navigate("/list") : navigate("/default");
  };

  const deleteCard = (data) => {
    notifyE();
    setArray(data);
    localStorage.setItem("Note", JSON.stringify(data));
    checkup();
  };

  const Done = (e) => {
    setComplete(e);
    checkup();
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
    localStorage.setItem("Note", JSON.stringify(active));
  };

  const Lendata = (datalen) => {
    setComplete(datalen);
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
        <Droppable droppableId="TodoList" direction="horizontal" axis="xy">
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

        <div className="footer">
          Completed({Complete}){" "}
          <i
            onClick={() => setCheck(!Check)}
            class="drop bi bi-caret-up-fill"
          ></i>
          {Check ? <Modale Lendata={Lendata} /> : ""}
        </div>
      </DragDropContext>
    </>
  );
}

export default Todopage;
