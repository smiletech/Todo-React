import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 } from "uuid";
let ARRDATA = "";
ARRDATA = JSON.parse(localStorage.getItem("Note")) || [];

function Add() {
  const [Title, setTitle] = useState("");
  const [Note, setNote] = useState("");
  // const [TimeP, setTimeP] = useState("");
  const [date, setdate] = useState(new Date());

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
    let month = obj.getMonth() + 1;
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
  const AddData = () => {
    let obj = {
      id: v4(),
      Title: Title,
      Note: Note,
      date: date,
    };
    ARRDATA.push(obj);
    console.log(ARRDATA);
    localStorage.setItem("Note", JSON.stringify(ARRDATA));
  };

  useEffect(() => {
    ARRDATA = JSON.parse(localStorage.getItem("Note")) || [];
  }, [date]);

  console.log(date);

  return (
    <div className="Card2 d-grid gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-pill"
        type="text"
        placeholder="Title..."
      ></input>
      <textarea
        onChange={(e) => setNote(e.target.value)}
        className="rounded"
        placeholder="Note...."
      ></textarea>
      <div className="d-flex">
        <DatePicker
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setdate(date)}
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
          <button onClick={AddData} className="btn btn-primary ms-0">
            Add
          </button>
        </Link>
        <button className="btn btn-primary ms-5">Cancel</button>
      </div>
    </div>
  );
}

export default Add;
