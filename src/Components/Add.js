import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Add() {
  const [Title, setTitle] = useState("");
  const [Note, setNote] = useState("");
  const [TimeP, setTimeP] = useState("");
  const [date, setdate] = useState(new Date());

  const TimeHandler = (index) => {
    console.log(date);

    setdate(new Date("08/12/2022"));
    console.log(date);

    if (index === 0) {
    } else if (index === 1) {
      // console.log(ChangeDate(2));
      setdate(new Date(ChangeDate(2)).toISOString());
    } else if (index === 2) {
      ChangeDate(7);
    } else if (index === 3) {
      ChangeDate(30);
    }
  };

  const ChangeDate = (day) => {
    const obj = new Date();
    const days = obj.getDate() + day;
    const month = obj.getMonth();
    const year = obj.getFullYear();

    // if (days > 30) days -= 30;
    let DATE = days + "/" + month + "/" + year;

    console.log(new Date(DATE).toDateString);
    return DATE;
  };

  const Titlehandler = (data) => {
    console.log("titlr" + data);
  };

  console.log(date);

  return (
    <div className="Card2 d-grid gap-3">
      <input
        onChange={(e) => Titlehandler(e.target.value)}
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
          <button className="btn btn-primary ms-0">Add</button>
        </Link>
        <button className="btn btn-primary ms-5">Cancel</button>
      </div>
    </div>
  );
}

export default Add;
