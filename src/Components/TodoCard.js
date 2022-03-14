import React from "react";

function TodoCard() {
  return (
    <>
      <div className="todo-card ms-4">
        <div className="Date-tilte">
          <button className="btn1">
            <i class="bi bi-check2-square"></i>
          </button>
          <p className="ms-2">abc</p>
        </div>

        <h2>tilte</h2>
        <div className="Fun">
          <button className="btn1">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button className="btn1">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
