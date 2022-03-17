import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import Default from "./Components/Default";
import Todopage from "./Components/Todopage";
import EditData from "./Components/EditData";


function App() {
  
  

 
  useEffect(() => {
    // checkup();
  }, []);

  return (
    <>
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
