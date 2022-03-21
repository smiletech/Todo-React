import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Png1 from "./PNG.png";
import { useNavigate } from "react-router-dom";
toast.configure();

function Default() {
  const [flag, setflag] = useState(true);
  let navigate = useNavigate();

  const notify = () => {
    toast.success("Welcome To Add", { autoClose: 3000 });
  };

  useEffect(() => {
    checkup();
  }, []);
  const checkup = () => {
    const ARRDATA = JSON.parse(localStorage.getItem("Note"));
    ARRDATA.length === 0 ? setflag(false) : setflag(true);
    console.log(ARRDATA.length);
    flag ? navigate("/list") : navigate("/default");
  };

  return (
    <>
      <div className="Card1">
        <div className="Div-Img">
          <img className="img1" src={Png1} alt="Not Found"></img>
        </div>
        <p className="my-3">
          My opinion is that anybody offended by breastfeeding is staring too
          hard
        </p>
        <hr />
        <Link to="/add">
          <button onClick={notify} className="btn btn-primary">
            Start Your First Note
          </button>
        </Link>
      </div>
    </>
  );
}

export default Default;
