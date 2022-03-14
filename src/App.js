import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import Default from "./Components/Default";
import Todopage from "./Components/Todopage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/default" element={<Default />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<Todopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
