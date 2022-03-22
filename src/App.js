import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import Default from "./Components/Default";
import Todopage from "./Components/Todopage";
import EditData from "./Components/EditData";
import Modale from "./Components/Modale";
import { useNavigate } from "react-router-dom";

function App() {
  // const checkup = () => {
  //   const ARRDATA = JSON.parse(localStorage.getItem("Note"));
  //   ARRDATA.length === 0 ? setflag(false) : setflag(true);
  //   flag ? navigate("/list") : navigate("/default");

  //   console.log(ARRDATA.length);
  // };
  useEffect(() => {
    // checkup();
  }, []);

  return (
    <>
      {/* <Modale /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/default" element={<Default />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<Todopage />} />
          <Route path="/update/:id" element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
