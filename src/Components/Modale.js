import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
let Arrdata = JSON.parse(localStorage.getItem("Completed")) || [];

function Modale({Lendata}) {
  const [open, setOpen] = useState(false);
  const [ArrayVAL, setArrayVAL] = useState([]);

  useEffect(() => {
    let Arre = JSON.parse(localStorage.getItem("Completed")) || [];
    setArrayVAL(Arre);
  }, []);

  console.log(ArrayVAL + "....");
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleDelete = (index) => {
    Arrdata.splice(index, 1);
    setArrayVAL(Arrdata);
    localStorage.setItem("Completed", JSON.stringify(Arrdata));
    
    Lendata()
  };

  return (
    <div style={{ display: "block", padding: 30 }}>
      <button className="btn btn-success" type="button" onClick={handleOpen}>
        Click Me to Open Completed task
      </button>
      <Modal
        onClose={handleClose}
        open={open}
        style={{
          position: "absolute",
          border: "2px solid #000",
          backgroundColor: "lightGreen",
          boxShadow: "2px solid black",
          height: 430,
          width: 440,
          margin: "auto",
        }}
      >
        <ul>
          {ArrayVAL.map((ele, index) => (
            <li>
              {ele.Title}
              <button
                onClick={() => handleDelete(index)}
                className="mx-4 btn-danger"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
}

export default Modale;
