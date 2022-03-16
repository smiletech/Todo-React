import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditData() {
  const [Title, setTitle] = useState("");
  const [Note, setNote] = useState("");
  const { id } = useParams();
  const location = useLocation();
  const [date, setdate] = useState(new Date());

  const { state } = location;

  console.log(id);
  console.log(state);

  const TimeHandler = (index) => {
    if (index === 0) {
      setdate(new Date(ChangeDate(0)));
    } else if (index === 1) {
      setdate(new Date(ChangeDate(1)));
    } else if (index === 2) {
      setdate(new Date(ChangeDate(7)));
    } else if (index === 3) {
      setdate(new Date(ChangeDate(30)));
    }
  };

  const ChangeDate = (day) => {
    const count = daysInThisMonth();
    const obj = new Date();
    let days = obj.getDate() + day;
    let month = obj.getMonth();
    const year = obj.getFullYear();
    if (days > count) {
      days -= count;
      month += 1;
    }
    var DATE = month + "/" + days + "/" + year;
    return DATE;
  };

  function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }
  //   const AddData = () => {
  //     let obj = {
  //       id: v4(),
  //       Title: Title,
  //       Note: Note,
  //       date: date,
  //     };
  //     ARRDATA.push(obj);
  //     console.log(ARRDATA);
  //     localStorage.setItem("Note", JSON.stringify(ARRDATA));
  //   };

  const UpdateData = (id) => {
    const NewArr = JSON.parse(localStorage.getItem("Note"));

    for (let i = 0; i < NewArr.length; i++)
      if (NewArr[i].id === id) {
        NewArr[i].Title = Title;
        NewArr[i].Note = Note;
        NewArr[i].date = date;
      } else {
        console.log("array id :- " + NewArr[i].id);
      }

    for (let i = 0; i < NewArr.length; i++) {
      console.log("array id :- " + NewArr[i].Title);
    }
    localStorage.setItem("Note", JSON.stringify(NewArr));
    alert("Data Updated .... ");
  };

  useEffect(() => {
    console.log(Title);
    console.log(Note);
    console.log("titlr" + date);
  }, []);

  return (
    <div className="Card2 d-grid gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-pill"
        type="text"
        placeholder="Title..."
        defaultValue={state.Title}
      ></input>
      <textarea
        onChange={(e) => setNote(e.target.value)}
        className="rounded"
        placeholder="Note...."
        defaultValue={state.Note}
      ></textarea>
      <div className="d-flex">
        <DatePicker
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setdate(date)}
          // value={state.date}
        />

        <select
          className="rounded p-2 ms-4"
          onChange={(e) => TimeHandler(e.target.selectedIndex)}
          name="Time"
          id="Time"
        >
          <option value="Today">Today</option>
          <option value="Tomarrow">Tomorrow</option>
          <option value="Next Week">Next Week</option>
          <option value="Next month">Next month</option>
        </select>
      </div>
      <div className="ms-2">
        <Link to="/list">
          <button
            onClick={() => UpdateData(id)}
            className="btn btn-primary ms-0"
          >
            Update
          </button>
        </Link>
        <button onClick={() => {}} className="btn btn-primary ms-5">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditData;
